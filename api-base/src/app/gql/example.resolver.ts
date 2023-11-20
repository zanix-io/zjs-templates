import { Mutation, Query, Resolver, ZanixResolver } from '@zanix/server'
import type { ExampleService } from 'services/example.service'

/**
 * @Resolver
 * @name ExamplesResolver
 * @description Graphql Resolver.
 * @extends { ZanixResolver<BaseService> }
 * @decorator @type {typeof Resolver} @argument service {BaseService}
 * @summary This is the Presentation layer.
 * -------- Resolvers for GQL request logic only.
 */

@Resolver({ prefix: 'zanix', service: 'example-service' })
export class WelcomeResolver extends ZanixResolver<ExampleService> {
  /**
   * @name welcome
   * @summary Query `zanix_welcome { message }`
   */
  @Query({ output: 'Welcome!' })
  public welcome() {
    return { message: 'Welcome ZanixJS Server' }
  }

  /**
   * @name resolve
   * @summary Mutation `zanix_resolve(input: $input}){
        message
        data
    }}`
   */
  @Mutation({ input: 'Data!', output: 'Welcome' })
  public resolve(payload: Welcome) {
    const data = this.service.welcome(payload)

    return { message: 'Request processed', data }
  }
}
