import React, {
  isValidElement,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react";
import { map } from "react-itertools";

type BentoContext = {};
const Context = createContext<BentoContext>({});

const BentoProvider = ({ children }) => {
  useEffect(() => {
    map(children, child => {
      if (isValidElement(child)) {
      }
    });
  });

  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export const useBentoContext = () => useContext<BentoContext>(Context);
// export const useBento = () => {
//   const { register, unregister, has } = useBentoContext();
//   const bento = name => {
//     return {
//       ref: (ref: HTMLElement | null): void => {
//         console.log("Registering component", name, ref);
//         if (ref) {
//           register(name, ref);
//         }
//       }
//     };
//   };
//
//   return {
//     bento
//   };
// };

export default BentoProvider;
