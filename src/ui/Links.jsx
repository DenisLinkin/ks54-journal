/* ============================== REACT ============================== */
import { useState } from "react";

/* ============================== REACT ROUTER ============================== */
import { useLocation } from "react-router-dom";

/* ============================== REACT-КОМПОНЕТЫ ============================== */
import NavbarLink from "./NavbarLink";

/* ============================== ИКОНКИ ============================== */
import {
  IconBook,
  IconCalendarTime,
  IconChartBar,
  IconDoorEnter,
  IconHome2,
  IconSettings,
  IconSchool,
  IconUsers,
} from "@tabler/icons-react";
import { useNavbar } from "../context/NavbarContext";

const mockdata = [
  { icon: IconHome2, label: "Главная", to: "/главная" },
  { icon: IconCalendarTime, label: "Курсы и расписание", to: "/расписание" },
  { icon: IconSchool, label: "Экзамены и сессии", to: "/экзамены" },
  { icon: IconBook, label: "Журналы и ведомости", to: "/журналы" },
  { icon: IconChartBar, label: "Отчёты и аналитика", to: "/отчёты" },
  { icon: IconDoorEnter, label: "Посещаемость", to: "/посещения" },
  { icon: IconUsers, label: "Студенты и преподаватели", to: "/люди" },
  { icon: IconSettings, label: "Настройки", to: "/настройки" },
];

export default function Links() {
  const { close } = useNavbar();

  const location = useLocation();
  const [active, setActive] = useState(
    mockdata.findIndex((item) => item.to === location.pathname)
  );

  function handleClick(index) {
    setActive(index);
    close();
  }

  return mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => handleClick(index)}
    />
  ));
}
