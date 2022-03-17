import { toast } from 'react-toastify';

export const toastr = (message, type) => {
  toast[type](message, {
    closeButton: false,
    hideProgressBar: true,
    pauseOnHover: false,
    closeOnClick: false,
  });
  return true;
};
