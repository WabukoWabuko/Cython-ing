from setuptools import setup
from Cython.Build import cythonize

setup(
    name='cython_starter',
    ext_modules=cythonize('example.pyx'),
    zip_safe=False,
)