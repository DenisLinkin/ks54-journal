import { AppShell, Center, Image } from "@mantine/core";
import LoginForm from "../features/auth/ui/LoginForm";

export default function Login() {
  return (
    <AppShell>
      <AppShell.Header p="md">
        <Image h={50} fit="contain" src="logo.png" />
      </AppShell.Header>

      <AppShell.Main>
        <Center w="100vw" h="100vh">
          <LoginForm />
        </Center>
      </AppShell.Main>
    </AppShell>
  );
}
