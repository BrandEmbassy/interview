import '../css/style.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { v4 } from 'node-uuid'

import { configureStore } from './Store'
import App from './Container/App'

const initialState = {
  "contacts": [
    {
      "id": v4(),
      "fullName": "John Smith",
      "bio": "Human beings are a disease, a cancer of this planet. You're a plague and we are the cure.",
      "tel": 123456789,
      "email": "john.smith@matrix.com"
    },
    {
      "id": v4(),
      "fullName": "Thomas Anderson",
      "bio": "I know you're out there. I can feel you now. I know that you're afraid... you're afraid of us. You're afraid of change.",
      "tel": 111222333,
      "email": "thomas.anderson@matrix.com"
    }
  ]
}

const store = configureStore(initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
)
