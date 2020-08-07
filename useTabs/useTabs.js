export const useTabs = (initialTabIndex, tabs) => {
    if (!tabs || !Array.isArray(tabs)) {
      return;
    }
    const [index, setIndex] = useState(initialTabIndex);
    return {
      currentTab: tabs[index],
      setIndex
    };
  };