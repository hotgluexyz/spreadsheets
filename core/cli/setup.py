from setuptools import setup

with open("README.md", "r") as fh:
    long_description = fh.read()

setup(
    name='gluestick',
    version='2.0.1',
    description='CLI to configure gluestick-api',
    long_description=long_description,
    long_description_content_type="text/markdown",
    url='https://github.com/hotgluexyz/gluestick',
    install_requires=[
        'Click'
    ],
    author='hotglue',
    author_email='hello@hotglue.xyz',
    license='GPLv3+',
    packages=['gluestick'],
    entry_points='''
        [console_scripts]
        gluestick=gluestick:main
    ''',
    zip_safe=False
)
