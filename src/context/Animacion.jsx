import { createContext, useEffect, useRef } from "react";
import Header from "../components/Header.jsx";

export const ShowContext = createContext();

function Animacion({ children }) {
  const refMain = useRef();

const showHandler = () => {
    refMain.current.classList.add("mostrar-vista");
    setTimeout(() => {
      refMain.current.classList.remove("mostrar-vista");
    }, 1000);
};

const hideHandler = () => {
    refMain.current.classList.add("ocultar-vista");
    setTimeout(() => {
      refMain.current.classList.remove("ocultar-vista");
    }, 1000);
};



  useEffect(() => {
    showHandler();
  }, []);

  return (
    <ShowContext.Provider value={{ showHandler, hideHandler }}>
      <Header />
      <main ref={refMain} className="Main">
        {children}
      </main>
    </ShowContext.Provider>
  );
}

export default Animacion;
