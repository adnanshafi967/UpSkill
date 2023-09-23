import { notification } from "antd";

type NotificationType = 'success' | 'info' | 'warning' | 'error';
/**
 * 
 * @param type {NotificationType}
 * @param message {String}
 * @param description {String}
 */
export const Notification = (type: NotificationType, message: string, description: string) => {
    notification[type]({
        message: message,
        description: description
    });
};