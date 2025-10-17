#!/usr/bin/env bash
set -e
python -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install cython pytest
echo "Environment ready. Run 'python setup.py build_ext --inplace' in starter-repo to build the example."