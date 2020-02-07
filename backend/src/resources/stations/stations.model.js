import mongoose from 'mongoose'

const stationSchema = new mongoose.Schema({}, { timestamps: true })

stationSchema.index({ date: 1, station: 1 }, { unique: true })

export const Station = mongoose.model('station', stationSchema)
