import Promise from 'bluebird';
import 'sweetalert/dist/sweetalert.css';
const alert = process.env.IS_BROWSER ? require('sweetalert') : {};

export function confirm({title = 'Are you sure?', text = 'This cannot be undone!', confirmText = 'Yes, delete it!'}) {
  return new Promise(resolve => {
    swal({
      title: title,
      text: text,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: confirmText,
      closeOnConfirm: true
    }, ok => ok && resolve() );
  })
}
