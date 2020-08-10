export const usePreventLeave = () => {
    const handlePreventLeave = event => {
      event.preventDefault();
      event.returnValue = false;
    }
    const enablePrevent = () => {
      window.addEventListener('beforeunload', handlePreventLeave);
    }
    const disablePrevent = () => {
      window.removeEventListener('beforeunload', handlePreventLeave)
    };
    return {
      enablePrevent,
      disablePrevent
    };
  };