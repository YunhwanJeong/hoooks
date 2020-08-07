export const useFadeIn = (duration, delay) => {
    const element = useRef();
    useEffect(() => {
      if (element.current) {
        const { current } = element;
        current.style.opacity = 1;
        current.style.transition = `opacity ${duration}s linear ${delay}s`;
      }
    }, []);
    return {
      ref: element,
      style: {
        opacity: 0
      }
    };
  };