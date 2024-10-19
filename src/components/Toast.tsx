import { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <Toaster
      position="bottom-left"
      toastOptions={{
        style: {
          fontWeight: "bold",
        },
        success: {
          style: {
            color: "green",
          },
        },
        error: {
          style: {
            color: "red",
          },
        },
      }}
    />
  );
};

export default Toast;
