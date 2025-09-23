/* ============================== MANTINE ============================== */
import { Stack } from "@mantine/core";

/* ============================== СТИЛИ ============================== */
import classes from "./Navbar.module.css";

/* ============================== КОМПОНЕТЫ ============================== */
import NavbarLink from "./NavbarLink";
import Links from "./Links";

/* ============================== ИКОНКИ ============================== */
import { IconLogout } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={5}>
          <Links />
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconLogout} label="Выход" />
      </Stack>
    </nav>
  );
}
