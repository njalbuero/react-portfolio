import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MenuContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
});

export const MenuContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

MenuContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
