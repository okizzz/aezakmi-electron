/* eslint-disable no-debugger */
import { notification } from "antd";

interface IProps {
  message: string;
  type?: "success" | "warning" | "info" | "error";
  description: string;
  duration?: number;
}

// FIXME: Разобраться почему не работает
const CreateNotification: any = () => {
  notification.success({
    message: "Notification Title",
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};

export default CreateNotification;
