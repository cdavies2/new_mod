#!/usr/bin/env bash
cd /kb/module/report-app
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
chmod +x /root/.nvm/nvm.sh
. /root/.nvm/nvm.sh &&  nvm install 20
npm install --global typescript
npm run install
npm run build 
