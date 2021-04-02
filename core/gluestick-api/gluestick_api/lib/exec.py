import subprocess
import re
import logging

ERROR_SEARCH = re.compile(r'\bCRITICAL\b | \bERROR\b | \bEXCEPTION\b | Traceback', flags=re.I | re.X)

class FailedExecutionException(subprocess.SubprocessError):
    def __init__(self, stdout, code):
        super(FailedExecutionException, self).__init__()
        self.stdout = stdout
        self.return_code = code

    @property
    def detail_message(self):
        return f"Execution Failed: Exited with code: " \
               f"{self.return_code}\n {self.stdout}" \
            if self.stdout is not None else f"Execution Failed: Exited with code: {self.return_code}."

    @property
    def error(self):
        err = {
            "code": self.code,
            "stdout": self.stdout
        }
        return err

    @property
    def message(self):
        return f"Execution Failed: Exited with code: {self.return_code}."

    @property
    def code(self):
        return self.return_code


def discover_error(stdout):
    m = ERROR_SEARCH.search(stdout)
    return m is not None


def exec_process(cmd, working_dir, log_prefix="hotglue.sync"):
    logger = logging.getLogger(log_prefix)

    try:
        running_process = subprocess.Popen(cmd, cwd=working_dir, stdout=subprocess.PIPE, shell=True,
                                           stderr=subprocess.STDOUT)

        stdout = ""

        # Print subprocess output in real time
        while True:
            line = running_process.stdout.readline()
            line = line.decode("utf-8").strip()
            # append to stdout
            stdout += line + '\n'
            # print to debug
            if log_prefix == "transform":
                print(line)
            else:
                logger.debug(line)

            if line == '' and running_process.poll() != None:
                break

        code = running_process.returncode
        discovered_error = discover_error(stdout)

        if code != 0 or (discovered_error and "etl" not in log_prefix):
            raise FailedExecutionException(stdout, code)
    except subprocess.SubprocessError as spe:
        logger.error(f"Subprocess Failed: {spe}")
        raise spe
