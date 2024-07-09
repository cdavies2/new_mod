#!/usr/bin/env bash
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
chmod +x /root/.nvm/nvm.sh
. /root/.nvm/nvm.sh &&  nvm install 20
npm run install
npm run build
#echo "Hello World"