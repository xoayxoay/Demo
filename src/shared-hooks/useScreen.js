import { useMediaQuery } from 'react-responsive';

const useScreen = () => {
  const results = {
    isLargeDesktop: false,
    isDesktop: false,
    isTablet: false,
    isMobile: false,
  };
  results.isLargeDesktop = useMediaQuery({ minWidth: 1280 });
  results.isDesktop = useMediaQuery({ minWidth: 1024 });
  results.isTablet = useMediaQuery({ maxWidth: 1024 });
  results.isMobile = useMediaQuery({ maxWidth: 640 });
  return results;
};

export { useScreen };
