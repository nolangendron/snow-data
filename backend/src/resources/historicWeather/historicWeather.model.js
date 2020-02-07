import mongoose from 'mongoose'

const historicWeatherSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true
    },
    temp: {
      type: Number,
      required: true
    },
    newSnow: {
      type: Number,
      required: true
    },
    snowPack: {
      type: Number,
      required: true
    },
    station: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'station',
      required: true
    }
  },
  { timestamps: true }
)

historicWeatherSchema.index({ date: 1, station: 1 }, { unique: true })

export const HistoricWeather = mongoose.model(
  'historicWeather',
  historicWeatherSchema
)
