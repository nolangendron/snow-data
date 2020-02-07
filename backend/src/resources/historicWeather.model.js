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
      require: true
    },
    snowPack: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
)

export const Station = mongoose.model('historicWeather', historicWeatherSchema)
