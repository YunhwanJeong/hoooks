export const useTitle = initialTitle => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
      const currentTitle = document.querySelector("title");
      currentTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
  };