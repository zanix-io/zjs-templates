import { ZanixProvider } from '@zanix/server'

/**
 * @Provider
 * @name ExampleBaseProvider
 * @description Provider class
 * @extends { ZanixProvider }
 * @summary Providers are for external connections.
 * -------- This is for Adapters use only.
 */

export class ExampleBaseProvider extends ZanixProvider {
  constructor() {
    super('protocol://provider.com')
  }
}
