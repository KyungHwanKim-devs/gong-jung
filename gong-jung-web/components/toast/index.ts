import { toast as originalToast, ExternalToast } from "sonner";

const defaultSuccessStyle = { background: "#55F9C4" };
const defaultErrorStyle = { background: "#FEEAEA" };
const defaultWarningStyle = { background: "#FFB600" };

const customToast = ((
  message: string | React.ReactNode,
  data?: ExternalToast
) => originalToast(message, data)) as typeof originalToast;

customToast.success = (
  message: string | React.ReactNode,
  data: ExternalToast = {}
) => {
  return originalToast.success(message, {
    ...data,
    style: { ...defaultSuccessStyle, ...data.style },
  });
};

customToast.error = (
  message: string | React.ReactNode,
  data: ExternalToast = {}
) => {
  return originalToast.error(message, {
    ...data,
    style: { ...defaultErrorStyle, ...data.style },
  });
};

customToast.warning = (
  message: string | React.ReactNode,
  data: ExternalToast = {}
) => {
  return originalToast.warning(message, {
    ...data,
    style: { ...defaultWarningStyle, ...data.style },
  });
};

customToast.info = originalToast.info;
customToast.custom = originalToast.custom;
customToast.message = originalToast.message;
customToast.promise = originalToast.promise;
customToast.dismiss = originalToast.dismiss;
customToast.loading = originalToast.loading;
customToast.getHistory = originalToast.getHistory;

export { customToast as toast };
