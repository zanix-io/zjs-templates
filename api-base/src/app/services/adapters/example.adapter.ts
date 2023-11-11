import { Adapter, ZanixAdapter } from '@zanix/server'

/**
 * @Adapter
 * @name ExampleAdapter
 * @description Data Access Adapter Object.
 * @extends { ZanixAdapter<BaseClient | BaseProvider?> }, other options
 * @decorator @type {typeof Adapter} @argument interactor {BaseClient | BaseProvider} @argument opts
 * @summary This is the Data Access Layer.
 * -------- Adapter for Data Access logic only:
 * -------- Providers or Clients interaction (Databases, APIs,...)
 */

@Adapter('example-adapter')
export class ExampleAdapter extends ZanixAdapter {
  /**
   *
   * @param data {string}
   */
  public async welcome(data: string): Promise<string> {
    const resp = `Data '${data}' received`
    this.logger.success(resp)

    return resp
  }
}
