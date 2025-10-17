import pytest
import importlib

def test_build_and_import(tmp_path, monkeypatch):
    # This test assumes the extension has been built in-place.
    mod = importlib.import_module('example')
    assert mod.add_ints(2,3) == 5