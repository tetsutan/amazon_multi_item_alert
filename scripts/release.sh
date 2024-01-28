#!/bin/bash

# スクリプトのディレクトリを取得
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"


cd $SCRIPT_DIR
cd ..

zip -r output/extention.zip * -x output/* scripts/*




