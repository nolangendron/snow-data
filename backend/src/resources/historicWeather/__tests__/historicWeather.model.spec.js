import { HistoricWeather } from '../historicWeather.model'
import mongoose from 'mongoose'

describe('HistoricWeather model', () => {
  describe('schema', () => {
    test('date', () => {
      const date = HistoricWeather.schema.obj.date
      expect(date).toEqual({
        type: Date,
        required: true
      })
    })

    test('status', () => {
      const temp = HistoricWeather.schema.obj.temp
      expect(temp).toEqual({
        type: Number,
        required: true
      })
    })

    test('newSnow', () => {
      const newSnow = HistoricWeather.schema.obj.newSnow
      expect(newSnow).toEqual({
        type: Number,
        required: true
      })
    })

    test('snowPack', () => {
      const snowPack = HistoricWeather.schema.obj.snowPack
      expect(snowPack).toEqual({
        type: Number,
        required: true
      })
    })

    test('station', () => {
      const station = HistoricWeather.schema.obj.station
      expect(station).toEqual({
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'station',
        required: true
      })
    })
  })
})
