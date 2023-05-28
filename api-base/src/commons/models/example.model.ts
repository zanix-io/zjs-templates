import { MongoProvider } from 'providers/mongo.provider'

export const ExampleModel = MongoProvider.generateModel<ExampleModelAttrs>(
  'znxTests',
  {
    data: { type: String, require: true }
  },
  {
    timestamps: true,
    toObject: {
      virtuals: true,
      transform: (_, ret) => {
        delete ret._id
        delete ret.__v
      }
    },
    toJSON: {
      virtuals: true,
      transform: (_, ret) => {
        delete ret._id
        delete ret.__v
      }
    }
  }
)

declare global {
  type ExampleModel = typeof ExampleModel
}
