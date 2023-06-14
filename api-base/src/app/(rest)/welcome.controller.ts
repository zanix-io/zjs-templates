import { Controller, Get, ZanixController } from '@zanix/server'

/**
 * @Controller
 * @name WelcomeController
 * @description  Controller class
 * @routes [@GET '{host}/api/welcome']
 * @extends { ZanixController<BaseService> }
 * @decorator @type {typeof Controller} @argument prefix {string} @argument prefix {BaseService}
 * @summary  This is the Presentation layer.
 * -------- Controllers for REST logic only.
 */

@Controller()
export class WelcomeController extends ZanixController {
  /**
   * @name welcome
   * @summary GET api/welcome route
   * @returns {Promise<HttpResponse>}
   */
  @Get()
  public async welcome(): Promise<HttpResponse> {
    return {
      message: `Welcome to ZanixJS Server.`
    }
  }
}
