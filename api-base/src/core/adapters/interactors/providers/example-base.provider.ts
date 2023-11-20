import { Interactor, ZanixProvider } from '@zanix/server'

/**
 * @Provider
 * @name ExampleBaseProvider
 * @description Provider class
 * @extends { ZanixProvider }
 * @summary Providers are for external APPs connections.
 * -------- This is for Adapters use only.
 */

@Interactor({ type: 'general-provider' })
export class ExampleBaseProvider extends ZanixProvider {
  constructor() {
    super('https://url.com')
  }
}
