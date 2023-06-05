import {
  Controller,
  Get,
  Interceptor,
  Post,
  ZanixController
} from '@zanix/server'
import { ExampleService } from 'services/example.service'
import { ExampleRTO } from './rtos'
import { exampleInterceptor } from 'middlewares'

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
  /**
   * @name welcome
   * @summary GET api/welcome route
   * @returns {HttpResponse}
   */
  @Get()
  public async welcome() {
    return {
      message: 'Welcome to ZanixJS Server'
    }
  }

  /**
   * @name welcomeIntercepted
   * @summary GET api/welcome/intercepted route
   * @description Shows an option to intercept response using @Interceptor decorator
   * @returns {HttpResponse}
   */
  @Get('intercepted')
  @Interceptor(exampleInterceptor)
  public async welcomeIntercepted() {
    return {
      message: 'Welcome to ZanixJS Server'
    }
  }

  /**
   * @name post
   * @summary POST api/welcome route
   * @description Request object validation {ExampleRTO} and processing
   * @param payload
   * @returns
   */
  @Post(ExampleRTO)
  public async post(payload: Welcome) {
    const data = await this.service.welcome(payload)

    return {
      message: 'Request processed',
      data: { data, piped: this.context.req.body.piped }
    }
  }
}
