import json
from pathlib import Path

import requests

DATA_FOLDER = "data/"
DATA_FNAME = "loadable-stats.json"
CHUNK_FIELD = "assetsByChunkName"
JS_FILE_EXTENSION = ".js"
WEBPACK_URL = "https://static-assets-prod.epicgames.com/epic-store/static/webpack/"
TIMEOUT_IN_SECONDS = 5


def load_json(fname):
    with Path(fname).open(encoding="utf8") as f:
        return json.load(f)


def save_text(text, fname):
    Path(fname).write_text(text, encoding="utf8")


def download_asset(asset_fname, fname):
    r = requests.get(f"{WEBPACK_URL}{asset_fname}", timeout=TIMEOUT_IN_SECONDS)

    if r.ok:
        save_text(r.text, fname)


def download_all_the_assets(data_chunks):
    for chunk_name, assets in data_chunks.items():
        js_assets = [fname for fname in assets if fname.endswith(JS_FILE_EXTENSION)]

        if js_assets:
            num_assets = len(js_assets)
            if num_assets > 1:
                print(
                    f"[WARNING] {num_assets} assets match to {chunk_name}: {js_assets}",
                )
            download_asset(
                asset_fname=js_assets[0],
                fname=f"{DATA_FOLDER}{chunk_name}{JS_FILE_EXTENSION}",
            )


def main():
    data = load_json(f"{DATA_FOLDER}{DATA_FNAME}")
    download_all_the_assets(data[CHUNK_FIELD])


if __name__ == "__main__":
    main()
