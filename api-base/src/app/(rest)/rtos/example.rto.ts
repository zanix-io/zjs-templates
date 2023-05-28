import { Expose, IsNumberString, ZanixRTO } from '@zanix/server'

/**
 * @RTO
 * @name ExampleRTO
 * @description Request Transfer Object.
 * @extends {ZanixRTO}
 * @summary To transmit user information to the controller.
 * -------- This is for Controller use only.
 */

export class ExampleRTO extends ZanixRTO {
  @IsNumberString()
  @Expose()
  public data!: string
}
