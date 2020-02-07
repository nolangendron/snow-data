import { HistoricWeather } from './historicWeather'
import mongoose from 'mongoose'
import { connect } from '../utils/db'

const run = async () => {
  await connect('mongodb://localhost:27017/api-test/')
  const historicWeather = await HistoricWeather.create({
    date: '2020-01-01T07:00:00.000Z',
    temp: 0.433,
    newSnow: 5,
    snowPack: 80.4,
    station: mongoose.Types.ObjectId()
  })
  console.log(historicWeather)
}

run()
