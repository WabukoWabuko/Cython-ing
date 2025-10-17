Lab 1 — First Cython module

1. Create a new venv and activate it.

2. pip install cython pytest

3. Create `example.pyx` with:

```
cdef public int add_ints(int a, int b):
    return a + b
```

4. Create `setup.py`:

```
from setuptools import setup
from Cython.Build import cythonize

setup(ext_modules=cythonize('example.pyx'))
```

5. Build:
```
python setup.py build_ext --inplace
```

6. Run `pytest` to verify tests in `starter-repo/tests`.

Notes: lab2 and lab3 expand with profiling and packaging steps.