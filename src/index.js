import '../css/style.css'
import React from 'react'
import { render } from 'react-dom'

import App from './Container/App'

const defaultData = {
  "contactList": [
    {
      "fullName": "John Smith",
      "bio": "Human beings are a disease, a cancer of this planet. You're a plague and we are the cure.",
      "phone": 123456789,
      "email": "john.smith@matrix.com"
    },
    {
      "fullName": "Thomas Anderson",
      "bio": "I know you're out there. I can feel you now. I know that you're afraid... you're afraid of us. You're afraid of change.",
      "phone": 111222333,
      "email": "thomas.anderson@matrix.com"
    }
  ]
}
render(<App contacts={defaultData.contactList} />, document.getElementById("app"))
