import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { createContext, useContext } from "react";

const NavbarContext = createContext();

function NavbarProvider({ children }) {
  const [opened, { toggle, close }] = useDisclosure();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <NavbarContext.Provider value={{ opened, close, toggle, isMobile }}>
      {children}
    </NavbarContext.Provider>
  );
}

function useNavbar() {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error(
      "useNavbar должен использоваться внутри NavigationProvider"
    );
  }
  return context;
}

export { NavbarProvider, useNavbar };
