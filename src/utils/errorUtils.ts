export const extractErrorMessage = (error: any) => {
  return (
    error?.response?.data?.message ||
    error?.response?.data?.error || // fallback if using different field
    error?.message ||
    "An unknown error occurred."
  );
};
