import { Job, ZanixJob } from '@zanix/server'

@Job('jobExample')
export class ExampleJob extends ZanixJob {
  public onProcess(secureData: string) {
    this.logger.debug(`Job was executed. Data: ${secureData}`)
  }
}
