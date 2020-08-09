export const useFullScreen = () => {
  const element = useRef();

  const handleFullScreen = () => {
    element.current.requestFullscreen();
  };

  useEffect(() => {
    if (element.current) {
      const button = element.current.nextSibling;
      button.addEventListener("click", handleFullScreen);
    }
    return () => {
      button.removeEventListener("click", handleFullScreen);
    };
  }, []);
  return element;
};