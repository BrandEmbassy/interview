import '../css/style.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from './Store'

import App from './Container/App'

const initialState = {
  "contactList": [
    {
      "id": 1,
      "fullName": "John Smith",
      "bio": "Human beings are a disease, a cancer of this planet. You're a plague and we are the cure.",
      "phone": 123456789,
      "email": "john.smith@matrix.com"
    },
    {
      "id": 2,
      "fullName": "Thomas Anderson",
      "bio": "I know you're out there. I can feel you now. I know that you're afraid... you're afraid of us. You're afraid of change.",
      "phone": 111222333,
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
