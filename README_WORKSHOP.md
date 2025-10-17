Workshop pack overview

This repository contains a workshop pack for teaching Cython. Use the `workshop/` folder to run labs and ship materials to learners.

To run the starter example:

```bash
cd workshop/starter-repo
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt  # if provided, else pip install cython pytest
python setup.py build_ext --inplace
pytest
```

The `slides/` folder contains markdown source slides you can convert into PDF or reveal.js presentations.