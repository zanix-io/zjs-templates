import { Job, ZanixJob } from '@zanix/server'

@Job('example-job')
export class ExampleJob extends ZanixJob {
  public onProcess(secureData: string) {
    this.logger.debug(`Job was executed. Data: ${secureData}`)
  }
}
