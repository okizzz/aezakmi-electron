/* eslint-disable no-debugger */
import { notification } from "antd";

interface IProps {
  message: string;
  type?: "success" | "warning" | "info" | "error";
  description: string;
  duration?: number;
}

// FIXME: Разобраться почему не работает
const CreateNotification = ({
  message,
  description,
  type = "success",
}: IProps): void => {
  notification[type]({
    message: message,
    description: description,
    onClick: () => {
      console.log("Notification Clicked!", type);
    },
  });
};

export default CreateNotification;
