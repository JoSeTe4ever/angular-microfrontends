import { Injectable } from '@nestjs/common';
import { MicroFrontendRuntime } from '@mf-app/interfaces';


@Injectable()
export class AppService {

  //TODO backend storage
  currentMicroServicesRaw = [];


  getData(): { message: string } {
    return { message: 'Welcome to micro-discover!' };
  }

  getMicroFrontends() {
    return this.currentMicroServicesRaw;
  }

  registerMicroFrontend(newOne : MicroFrontendRuntime) {
    this.currentMicroServicesRaw.push(newOne)
  }
}
