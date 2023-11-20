import { Interactor, ZanixRestClient } from '@zanix/server'

/**
 * @Client
 * @name ExampleClient
 * @description Client class
 * @extends { ZanixRestClient }
 * @summary Clients are for external API connections.
 * -------- This is for Adapters use only.
 */

@Interactor({ type: 'general-client' })
export class ExampleClient extends ZanixRestClient {
  constructor(config: Configuration) {
    super({ uri: config.exampleDevUri })
  }

  public example() {
    return 'ExampleClient'
  }
}
