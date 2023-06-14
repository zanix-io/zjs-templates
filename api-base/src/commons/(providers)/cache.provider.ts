// Uncomment 'useCacheProvider' to enable memcached or redis as the cache provider
// The default cache provider is the node-cache library

// 'useCacheProvider'

import { ZanixMemcachedProvider } from '@zanix/server'

/**
 * @Provider
 * @name ExampleMemcachedProvider
 * @description Cache Provider Class
 * @extends { ZanixMemcachedProvider | ZanixRedisProvider }
 * @summary Provider for caching connections.
 * -------- This is for Adapters use only.
 */

export class ExampleMemcachedProvider extends ZanixMemcachedProvider {
  constructor(/* config: Configuration */) {
    super('127.0.0.1:11211')
    this.logger.info('Cache provider initialized')
  }
}
