import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to micro-discover!' };
  }

  getMicroFrontends() {
    return {
      "name": "mf-react-app1",
      "appName": "app-react-mf",
      "version": "1.1.0",
      "appType": "react",
      "content": [
        {
          "type": "js",
          "bundleType": "bundle",
          "isMainBundle": false,
          "path": "/scripts/component-lib.012023ce.bundle.js"
        },
        {
          "type": "js",
          "bundleType": "bundle",
          "isMainBundle": false,
          "path": "/scripts/component-lib.012023ce.bundle.js"
        }
      ]
    };
  }
}
