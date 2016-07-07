import util from '../util'

export default [
  {
    form: 'contact',
    fields: ["fullName", "bio", "tel", "email"],
    validate: (values) => {
      const errors = {}

      if (!values.fullName) {
        errors.fullName = 'Required'
      }

      if (!util.isPhone(values.tel)) {
        errors.tel = 'Wrong format'
      }

      if (!util.isEmail(values.email)) {
        errors.email = 'Wrong format'
      }

      return errors
    }
  },
  function({ contacts, selectedId }) {
    return {
      initialValues: contacts.find((contact) => contact.id === selectedId)
    }
  }
]
