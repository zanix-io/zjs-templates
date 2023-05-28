import { ZanixRestClient } from '@zanix/server'

/**
 * @Client
 * @name ExampleClient
 * @description Client class
 * @extends { ZanixRestClient }
 * @summary Clients are for external API connections.
 * -------- This is for Adapters use only.
 */

export class ExampleClient extends ZanixRestClient {
  constructor(config: Configuration) {
    super({ url: config.exampleDevUrl })
  }

  public example() {
    return 'ExampleClient'
  }
}
