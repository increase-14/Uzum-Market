import { useContext } from "react";
import { Context } from "../context";

const useAppContext = () => {
  const context = useContext(Context);

  if (!context) throw new Error("Context topilmadi");
  return context;
};

export default useAppContext;
