import {
  Controller,
  Get,
  Interceptor,
  Post,
  ZanixController
} from '@zanix/server'
import type { ExampleService } from 'services/example.service'
import { ExampleRTO } from 'rtos'
import { exampleInterceptor } from 'middlewares'

/**
 * @Controller
 * @name ExampleController
 * @description  Controller class
 * @routes [@GET '{host}/api/zanix/intercepted', @POST '{host}/api/zanix']
 * @extends { ZanixController<BaseService> }
 * @decorator @type {typeof Controller} @argument prefix {string} @argument prefix {BaseService}
 * @summary  This is the Presentation layer.
 * -------- Controllers for REST logic only.
 */

@Controller({ prefix: 'zanix', service: 'example-service' })
export class ExampleController extends ZanixController<ExampleService> {
  /**
   * @name welcomeIntercepted
   * @summary GET api/zanix/intercepted route
   * @description Shows an option to intercept response using @Interceptor decorator
   * @returns {Promise<HttpResponse>}
   */
  @Get('intercepted')
  @Interceptor(exampleInterceptor)
  public async welcomeIntercepted(): Promise<HttpResponse> {
    return {
      message: 'Welcome to ZanixJS Server'
    }
  }

  /**
   * @name post
   * @summary POST api/zanix route
   * @description Request object validation {ExampleRTO} and processing
   * @param payload
   * @returns {Promise<HttpResponse>}
   */
  @Post(ExampleRTO)
  public async post(payload: ExampleData): Promise<HttpResponse> {
    const data = await this.service.welcome(payload)

    return {
      message: 'Request processed',
      data: { data, piped: this.context.req.body.piped }
    }
  }
}
