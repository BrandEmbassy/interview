
const utils = {
  isEmail(s) {
    /* eslint no-useless-escape:0 */
    const regexp = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    return regexp.test(s);
  },

  isPhone(s) {
    /* eslint no-useless-escape:0 */
    const regexp = /^[0-9\-\+\ ]{16}$/i;
    return regexp.test(s);
  },
  isTextValid(s) {
    const regexp = /^\d/i;
    return regexp.test(s);
  },
};

export default utils;

