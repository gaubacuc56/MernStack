import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = (type, msg, position) => {
  toast[type](msg, {
    position: position,
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export default Toast;
