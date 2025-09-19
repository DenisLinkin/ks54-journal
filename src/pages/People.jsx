import { Paper, Tabs } from "@mantine/core";

export default function People() {
  return (
    <Paper
      shadow="xl"
      p="sm"
      withBorder
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Tabs defaultValue="students" orientation="vertical">
        <Tabs.List>
          <Tabs.Tab value="students">Студенты</Tabs.Tab>
          <Tabs.Tab value="teachers">Преподаватели</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="students">Студенты</Tabs.Panel>

        <Tabs.Panel value="teachers">Преподаватели</Tabs.Panel>
      </Tabs>
    </Paper>
  );
}
