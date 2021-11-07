import { Injectable } from '@nestjs/common';
import { MicroFrontendRuntime } from '@mf-app/interfaces';


@Injectable()
export class AppService {

  //TODO backend storage
  currentMicroServicesRaw: Array<MicroFrontendRuntime> = [{
    path: 'gallery',
    appName: 'gallery',
    version: '1.0.0',
    remoteOptions: {
      remoteEntry: 'http://localhost:5000/remoteEntry.js',
      exposedModule: './Module',
      remoteName: 'gallery',
    }
  },
  {
    path: 'test',
    appName: 'test',
    version: '1.0.0',
    remoteOptions: {
      remoteEntry: 'http://localhost:5003/remoteEntry.js',
      exposedModule: './Module',
      remoteName: 'gallery',
    }
  }];


  getData(): { message: string } {
    return { message: 'Welcome to micro-discover!' };
  }

  getMicroFrontends() {
    return this.currentMicroServicesRaw;
  }

  registerMicroFrontend(newOne: MicroFrontendRuntime) {
    this.currentMicroServicesRaw.push(newOne)
  }
}
