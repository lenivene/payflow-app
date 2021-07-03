import { useContext } from "react"
import { BarcodeContext } from "../contexts/BarcodeContext";

export const useBarcode = () => {
  const context = useContext(BarcodeContext);

  return context;
}