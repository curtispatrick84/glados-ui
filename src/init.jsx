import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const mountNode = document.createElement('div')
document.body.appendChild(mountNode)

document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(
    <App />,
    mountNode
  )
)
