import { Mutation, Query, Resolver, ZanixResolver } from '@zanix/server'
import { ExampleService } from 'services/example.service'

/**
 * @Resolver
 * @name ExamplesResolver
 * @description Graphql Resolver.
 * @extends { ZanixResolver<BaseService> }
 * @decorator @type {typeof Resolver} @argument service {BaseService}
 * @summary This is the Presentation layer.
 * -------- Resolvers for GQL request logic only.
 */

@Resolver(ExampleService)
export class WelcomeResolver extends ZanixResolver<ExampleService> {
  @Query({ output: 'Welcome!' })
  public welcome() {
    return { message: 'Welcome ZanixJS Server' }
  }

  @Mutation({ input: 'Data!', output: 'Welcome' })
  public resolve(payload: Welcome) {
    const data = this.service.welcome(payload)

    return { message: 'Request processed', data }
  }
}
