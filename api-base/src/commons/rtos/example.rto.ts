import { Expose, IsString, ZanixRTO } from '@zanix/server'

/**
 * @RTO
 * @name ExampleRTO
 * @description Request Transfer Object.
 * @extends {ZanixRTO}
 * @summary To transmit user information to the controller.
 * -------- This is for Controller use only.
 */

export class ExampleRTO extends ZanixRTO {
  @IsString()
  @Expose()
  public data!: string
}

declare global {
  type ExampleData = ExampleRTO
}
