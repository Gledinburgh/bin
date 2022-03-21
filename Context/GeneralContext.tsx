import { createContext, useState, useContext } from 'react';




const defaultContext = {
  activeActor: '',
  handleActorChange:
    (activeActor: string) => { setTimeout(() => console.log("default call", activeActor), 5) }

}

export const AppContext = createContext(defaultContext);

export function GeneralContextWrapper({ children }: { children: any }) {

  const [activeActor, setActiveActor] = useState('')


  function handleActorChange(actorName: string) {
    console.log("GeneralContext.tsx: handleActorChange fired", actorName)
    setActiveActor(actorName)
  }

  return (
    <AppContext.Provider value={{ activeActor, handleActorChange }}>
      {children}
    </AppContext.Provider>
  );
}

export function GeneralContext() {
  return useContext(AppContext);
}








