import { Service, ZanixService } from '@zanix/server'
import { ExampleAdapter } from 'adapters/example.adapter'

/**
 * @Service
 * @name ExampleService
 * @description Service class.
 * @extends { ZanixService<BaseAdapter> }
 * @decorator @type {typeof Service} @argument adapter {BaseAdapter?}
 * @summary This is the Business Layer.
 * -------- Do not import providers or clients here.
 */

@Service(ExampleAdapter)
export class ExampleService extends ZanixService<ExampleAdapter> {
  /**
   *
   * @param data {Welcome}
   * @returns {string}
   */
  public async welcome({ data }: Welcome) {
    return this.adapter.welcome(data)
  }
}
