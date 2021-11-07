import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MicroFrontendRuntime } from '@mf-app/interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get("/micros")
  getMicroFrontends() {
    return this.appService.getMicroFrontends();
  }

  @Post("/register")
  registerMicroFrontend(@Body() message: MicroFrontendRuntime) {
    return this.appService.registerMicroFrontend(message);
  }
}
