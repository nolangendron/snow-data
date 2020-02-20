import React from 'react'
import ReactDOM from 'react-dom'
import { Title } from '../components/Title'

test('mounts', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Title />, div)
})