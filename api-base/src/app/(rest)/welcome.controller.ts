import { Controller, Get, Post, ZanixController } from '@zanix/server'
import { ExampleService } from 'services/example.service'
import { ExampleRTO } from './rtos'

/**
 * @Controller
 * @name WelcomeController
 * @description  Controller class
 * @extends { ZanixController<BaseService> }
 * @decorator @type {typeof Controller} @argument prefix {string} @argument prefix {BaseService}
 * @summary  This is the Presentation layer.
 * -------- Controllers for REST logic only.
 */

@Controller('welcome', ExampleService)
export class WelcomeController extends ZanixController<ExampleService> {
  @Get()
  public async welcome() {
    return {
      message: 'Welcome ZanixJS Server'
    }
  }

  @Post(ExampleRTO)
  public async post(payload: Welcome) {
    const data = await this.service.welcome(payload)

    return { message: 'Request processed', data }
  }
}
