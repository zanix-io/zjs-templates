import { ZanixMongoProvider } from '@zanix/server'

const ExampleModel = ZanixMongoProvider.defineModel<ExampleModelAttrs>(
  'znxTests',
  {
    data: { type: String, require: true }
  },
  {
    timestamps: true
  }
)

declare global {
  type ExampleModel = typeof ExampleModel
}

export default ExampleModel
