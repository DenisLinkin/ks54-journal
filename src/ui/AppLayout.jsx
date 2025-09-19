import { Outlet } from "react-router-dom";

import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Center, Group } from "@mantine/core";
import Navbar from "./Navbar";
import Header from "./Header";

export default function AppLayout() {
  const [opened, { toggle }] = useDisclosure();

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
        <Group h="100%" px="md">
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
