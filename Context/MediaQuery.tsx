
import React, {
  useState,
  useEffect,
  createContext,
  useContext
} from 'react';

import { scales } from '../data/mediaQueries'


const defaultValue = {}

const BreakpointContext = createContext(defaultValue);

const BreakpointProvider = ({ children, queries }: { children: any, queries: any }) => {
  const [queryMatch, setQueryMatch] = useState({});

  useEffect(() => {
    const mediaQueryLists: any = {};
    const keys = Object.keys(queries);
    let isAttached = false;

    const handleQueryListener = () => {
      const updatedMatches = keys.reduce((acc: any, media: any) => {
        acc[media] = !!(mediaQueryLists[media] && mediaQueryLists[media].matches);
        return acc;
      }, {})
      setQueryMatch(updatedMatches)
    }

    if (window && window.matchMedia) {
      const matches: any = {};
      keys.forEach(media => {
        if (typeof queries[media] === 'string') {
          mediaQueryLists[media] = window.matchMedia(queries[media]);
          matches[media] = mediaQueryLists[media].matches
        } else {
          matches[media] = false
        }
      });
      setQueryMatch(matches);
      isAttached = true;
      keys.forEach(media => {
        if (typeof queries[media] === 'string') {
          mediaQueryLists[media].addListener(handleQueryListener)
        }
      });
    }

    return () => {
      if (isAttached) {
        keys.forEach(media => {
          if (typeof queries[media] === 'string') {
            mediaQueryLists[media].removeListener(handleQueryListener)
          }
        });
      }
    }
  }, [queries]);

  return (
    <BreakpointContext.Provider value={queryMatch}>
      {children}
    </BreakpointContext.Provider>
  )

}

function filterLargestQuery(context: any): number {

  let queryList = Object.keys(context);


  let queries = []
  for (let i = 0; i < queryList.length; i++) {
    let media = queryList[i];
    if (context[media]) {
      queries.push(Number(media))
    }
  }

  let sorted = queries.sort((a: number, b: number) => {
    return b - a
  })

  var key: string = String(sorted[0]);
  if (scales[key]) {
    let scale: number = scales[key]
    return scale
  }



  else {
    console.log("default scale")
    let scale = 3 / 10
    return scale

  }


}

function getScale() {
  const context = useContext(BreakpointContext);
  if (context === defaultValue) {
    throw new Error('useBreakpoint must be used within BreakpointProvider');
  }
  return filterLargestQuery(context);
}
export { getScale, BreakpointProvider };