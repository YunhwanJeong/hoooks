export const useConfirm = (message, handleDelete, handleCancel) => {
    if (!message || typeof message !== "string") {
      return;
    }
    if (!handleDelete || typeof handleDelete !== "function") {
      return;
    }
    if (!handleDelete || typeof handleCancel !== "function") {
      return;
    }
    return () => {
      if (confirm(message)) {
        handleDelete();
      } else {
        handleCancel();
      }
    };
  };