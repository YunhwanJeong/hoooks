export const useBeforeLeave = beg => {
    if (beg && typeof beg !== "function") {
      return;
    }
    const handleMouseLeave = (event) => {
      const { clientY } = event;
      if (clientY <= 0) {
        beg();
      }
    };
    useEffect(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);
  };