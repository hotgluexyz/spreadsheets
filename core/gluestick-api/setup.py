from setuptools import setup, find_packages

setup(
    name='gluestick-api',
    version='0.0.1',
    py_modules=['gluestick_api'],
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    install_requires=['Flask']
)
