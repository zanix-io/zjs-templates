import { Job, ZanixJob } from '@zanix/server'

@Job('example-job')
export class ExampleJob extends ZanixJob {
  public onProcess(secureData: string) {
    this.logger.success(`Job was executed. Data: ${secureData}`)
  }
}
