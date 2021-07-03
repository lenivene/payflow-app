import React, {
  createContext,
  useCallback,
  useState
} from "react";

interface BarcodeContextData {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

export const BarcodeContext = createContext({} as BarcodeContextData);

export const BarcodeProvider: React.FC = ({ children }) => {
  const [isVisible, setIsVisibleBarcode] = useState(false);

  const setIsVisible = useCallback((isVisible: boolean) => {
    setIsVisibleBarcode(isVisible);
  }, []);

  return (
    <BarcodeContext.Provider value={{
      isVisible,
      setIsVisible
    }}>
      {children}
    </BarcodeContext.Provider>
  );
}