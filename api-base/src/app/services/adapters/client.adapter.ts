import { Adapter, ZanixAdapter } from '@zanix/server'
import { ExampleClient } from 'clients/example.client'

/**
 * @Adapter
 * @name ExampleAdapter
 * @description Data Access Adapter Object.
 * @extends { ZanixAdapter<BaseClient> }
 * @decorator @type {typeof Adapter} @argument interactor {BaseClient}
 * @summary This is the Data Access Layer.
 * -------- Adapter for Data Access logic only:
 * -------- Clients interaction
 */

@Adapter(ExampleClient)
export class ClientAdapter extends ZanixAdapter<typeof ExampleClient> {
  /**
   *
   * @param data {string}
   */
  public async welcome(data: string): Promise<string> {
    const resp = `Data '${data}' received. Client ${this.interactor.example()} executed`
    this.logger.success(resp)

    return resp
  }
}
