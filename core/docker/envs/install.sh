for d in */ ; do
    TAP="${d%/}"
    echo "Creating venv $TAP"

    if [ "$TAP" = "etl" ]
    then
        python3 -m venv $TAP
    else
        python3 -m venv $TAP --system-site-packages
    fi
    source $TAP/bin/activate
    pip3 install -r $TAP/requirements.txt
    deactivate
done
