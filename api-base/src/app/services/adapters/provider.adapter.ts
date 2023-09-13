import { Adapter, ZanixDatabaseAdapter } from '@zanix/server'
import { MongoProvider } from 'providers/mongo.provider'

/**
 * @Adapter
 * @name ExampleAdapter
 * @description Data Access Adapter Object.
 * @extends { ZanixDatabaseAdapter<ExampleModel, typeof MongoProvider> }, other options
 * @decorator @type { typeof Adapter } @argument { BaseProvider }interactor @argument { ModelName } opts
 * @summary This is the Data Access Layer.
 * -------- Adapter for Data Access logic only:
 * -------- Providers interaction (Databases, Queues,...)
 */

@Adapter(MongoProvider, 'znxTests')
export class ProviderAdapter extends ZanixDatabaseAdapter<
  ExampleModel,
  typeof MongoProvider
> {
  /**
   *
   * @param data {string}
   */
  public async welcome(data: string): Promise<ExampleModelAttrs> {
    this.logger.success(`Data '${data}' received`)

    return new this.Model({
      data
    }).save()
  }
}
