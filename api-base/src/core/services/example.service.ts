import { Service, ZanixService } from '@zanix/server'
import type { ExampleAdapter } from 'adapters/example.adapter'

/**
 * @Service
 * @name ExampleService
 * @description Service class.
 * @extends { ZanixService<BaseAdapter> }
 * @decorator @type {typeof Service} @argument adapter {BaseAdapter?}
 * @summary This is the Business Layer.
 * -------- Do not import providers or clients here.
 */

@Service('example-service')
export class ExampleService extends ZanixService {
  /**
   *
   * @param data {Welcome}
   * @returns {string}
   */
  public async welcome({ data }: ExampleData) {
    this.tasker.run('example-job', { data: 'ok', contextId: this.contextId })

    return this.adapters.get<ExampleAdapter>('example-adapter').welcome(data)
  }
}
