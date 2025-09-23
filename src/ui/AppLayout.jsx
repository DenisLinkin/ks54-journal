import { Outlet } from "react-router-dom";

import { AppShell, Burger, Center, Group } from "@mantine/core";
import Navbar from "./Navbar";
import Header from "./Header";
import { NavbarProvider, useNavbar } from "../context/NavbarContext";

export default function AppLayout() {
  const { opened, toggle } = useNavbar();

  return (
    <AppShell
      padding="md"
      header={{ height: { base: 60 } }}
      navbar={{
        width: { base: 70 },
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md" wrap="nowrap">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Header />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main
        style={{
          height: "calc(100vh - 60px)",
          overflow: "hidden",
        }}
      >
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
