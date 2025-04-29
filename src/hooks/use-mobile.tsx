
import * as React from "react"

export function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // Set initial state
    setMatches(mediaQuery.matches);

    // Add event listener
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup listener
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}

// Add backwards compatibility for any existing useIsMobile usage
export function useIsMobile() {
  return useMediaQuery('(max-width: 767px)');
}
