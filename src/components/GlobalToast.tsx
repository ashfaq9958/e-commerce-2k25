import { useEffect } from "react";
import { clearNotification } from "@/features/notification/rudex/notificationSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toast } from "sonner";
import type { NotificationState } from "@/features/notification/types/notification.types";

const GlobalToast = () => {
  const { message, type } = useAppSelector((state) => state.notification);
  const dispatch = useAppDispatch();

  const formattedDate = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  const showToast = (
    type: Exclude<NotificationState["type"], null>,
    message: string
  ) => {
    const options = {
      duration: 4000,
      position: "top-right" as const,
      // icon: "🔥", // optional: add custom icon
    };

    switch (type) {
      case "success":
        toast.success(message, {
          description: formattedDate,
        });
        break;
      case "error":
        toast.error(message, {
          description: formattedDate,
        });
        break;
      case "loading":
        toast.loading(message, {
          ...options,
          duration: Infinity,
        });
        break;
      case "info":
        toast(message, options); // default toast
        break;
      default:
        toast(message);
    }
  };

  useEffect(() => {
    if (message && type) {
      showToast(type, message);
      dispatch(clearNotification());
    }
  }, [message, type, dispatch]);

  return null;
};

export default GlobalToast;
