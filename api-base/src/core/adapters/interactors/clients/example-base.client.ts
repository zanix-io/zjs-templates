import { Interactor, ZanixClient } from '@zanix/server'

/**
 * @Client
 * @name ExampleBaseClient
 * @description Client class
 * @extends { ZanixClient }
 * @summary Clients are for external connections.
 * -------- This is for Adapters use only.
 */

@Interactor({ type: 'general-client' })
export class ExampleBaseClient extends ZanixClient {
  constructor() {
    super('https://client.com')
  }
}
