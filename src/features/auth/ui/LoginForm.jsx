import { useForm } from "@mantine/form";

import {
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Group,
  Anchor,
  Stack,
  Paper,
} from "@mantine/core";

import { IconLock, IconAt } from "@tabler/icons-react";

export default function LoginForm() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },

    validate: {
      email: (value) =>
        value && value.indexOf("@") > -1 && value.indexOf(".") > -1
          ? null
          : "Неверный email",
      password: (value) =>
        value && value.length >= 6
          ? null
          : "Пароль должен быть минимум 6 символов",
    },
  });

  function handleSubmit(values) {
    console.log("login values", values);
  }

  return (
    <Paper withBorder shadow="xs" radius="md" p="xl">
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Stack>
          <TextInput
            label="Логин"
            placeholder="Ваш логин"
            leftSection={<IconAt size={16} />}
            {...form.getInputProps("email")}
          />

          <PasswordInput
            label="Пароль"
            placeholder="Ваш пароль"
            leftSection={<IconLock size={16} />}
            {...form.getInputProps("password")}
          />

          <Group fullWidth position="apart" align="center">
            <Checkbox
              label="Запомнить меня"
              radius="sm"
              {...form.getInputProps("remember", {
                type: "checkbox",
              })}
            />
            <Anchor href="#" size="sm">
              Забыли пароль?
            </Anchor>
          </Group>

          <Button fullWidth mt="md" type="submit">
            Войти
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}
