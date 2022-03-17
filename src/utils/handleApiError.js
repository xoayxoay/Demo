export const handleApiError = (r) => {
  const message = r?.response?.data?.message ?? null;
  const errorType = r?.response?.data?.errorType ?? null;
  const errors = r?.response?.data?.errors ?? [];

  if (message) {
    return {
      errorType,
      message,
      errors,
    };
  }

  return { errorType, message: 'Error server!', errors };
};
