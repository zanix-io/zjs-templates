import { Interactor, ZanixMemcachedProvider } from '@zanix/server'

/**
 * @Provider
 * @name ExampleMemcachedProvider
 * @description Cache Provider Class
 * @extends { ZanixMemcachedProvider | ZanixRedisProvider }
 * @summary Provider for caching connections.
 * -------- This is for Adapters use only.
 */

@Interactor({ type: 'znx-cache-provider' })
export class ExampleMemcachedProvider extends ZanixMemcachedProvider {
  constructor(/* config: Configuration */) {
    super('127.0.0.1:11211')
    this.logger.info('Cache provider initialized')
  }
}
