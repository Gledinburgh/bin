import { createContext, useState, useContext } from 'react';

const defaultContext = {
  "key": "value"
}

export const AppContext = createContext(defaultContext);

export function GeneralContextWrapper({ children }: { children: any }) {

  return (
    <AppContext.Provider value={defaultContext}>
      {children}
    </AppContext.Provider>
  );
}

export function GeneralContext() {
  return useContext(AppContext);
}








