import { Button, Container, Group, Text, Title } from "@mantine/core";
import classes from "../ui/PageNotFound.module.css";
import { Illustration } from "../ui/Illustration";
import { useMoveBack } from "../hooks/useMoveBack";

export default function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <Illustration />
        <div className={classes.content}>
          <Title className={classes.title}>Здесь ничего нет</Title>
          <Text
            c="dimmed"
            size="lg"
            ta="center"
            className={classes.description}
          >
            Страница, которую вы пытаетесь открыть, не существует. Возможно, вы
            неправильно набрали текст адреса или страница была перемещена на
            другой URL-адрес. Если вы считаете, что это ошибка, обратитесь в
            службу поддержки.
          </Text>
          <Group justify="center">
            <Button size="md" onClick={moveBack}>
              Вернуться назад
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}
