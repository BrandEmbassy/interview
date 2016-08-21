import Promise from 'bluebird';

const swal = process.env.IS_BROWSER ? require('sweetalert') : {};

if (process.env.IS_BROWSER) {
  require('sweetalert/dist/sweetalert.css');
}

export default function confirm({ title = 'Are you sure?', text = 'This cannot be undone!', confirmText = 'Yes, delete it!' }) {
  return new Promise(resolve => {
    swal({
      title,
      text,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: confirmText,
      closeOnConfirm: true,
    }, ok => ok && resolve());
  });
}
