import { useMantineColorScheme, ActionIcon, Group } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group justify="space-between" style={{ width: "100%" }}>
      <div>Логитип</div>
      <ActionIcon
        onClick={() => toggleColorScheme()}
        variant="light"
        size="lg"
        aria-label="Toggle color scheme"
      >
        {colorScheme === "dark" ? (
          <IconSun size={20} />
        ) : (
          <IconMoon size={20} />
        )}
      </ActionIcon>
    </Group>
  );
}
