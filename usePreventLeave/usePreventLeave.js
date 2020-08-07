export const usePreventLeave = () => {
    const handlePreventLeave = event => {
      event.preventDefault();
      event.returnValue = false;
    }
    const protect = () => {
      window.addEventListener('beforeunload', handlePreventLeave);
    }
    const unprotect = () => {
      window.removeEventListener('beforeunload', handlePreventLeave)
    };
    return {
      protect,
      unprotect
    };
  };