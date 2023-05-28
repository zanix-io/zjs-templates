import ZanixServer from '@zanix/server'
import { testPipe } from 'middlewares'
import config from 'config'

ZanixServer.appSetup = {
  global: {
    pipes: [testPipe]
  },
  config
}

ZanixServer.start()
