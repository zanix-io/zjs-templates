import { Adapter, ZanixDatabaseAdapter } from '@zanix/server'
import { MongoProvider } from 'providers/mongo.provider'
import { ExampleModel } from 'models'

/**
 * @Adapter
 * @name ExampleAdapter
 * @description Data Access Adapter Object.
 * @extends { ZanixAdapter<BaseProvider> }, other options
 * @decorator @type {typeof Adapter} @argument interactor {BaseProvider} @argument opts
 * @summary This is the Data Access Layer.
 * -------- Adapter for Data Access logic only:
 * -------- Providers interaction (Databases, Queues,...)
 */

@Adapter(MongoProvider, ExampleModel)
export class ProviderAdapter extends ZanixDatabaseAdapter<
  MongoProvider,
  ExampleModel
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
