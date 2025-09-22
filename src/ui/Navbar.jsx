import { useState } from "react";

import {
  IconBook,
  IconCalendarTime,
  IconChartBar,
  IconDoorEnter,
  IconHome2,
  IconLogout,
  IconNumber5,
  IconSettings,
  IconUsersGroup,
  IconSchool,
} from "@tabler/icons-react";
import { Stack, Tooltip, UnstyledButton } from "@mantine/core";

import classes from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";

function NavbarLink({ icon: Icon, label, active, to, onClick }) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        component={Link}
        to={to}
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon size={20} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Главная", to: "/home" },
  { icon: IconCalendarTime, label: "Курсы и расписание", to: "/schedule" },
  { icon: IconSchool, label: "Экзамены и сессии", to: "/exams" },
  { icon: IconBook, label: "Журналы и ведомости", to: "/journals" },
  { icon: IconChartBar, label: "Отчёты и аналитика", to: "/report" },
  { icon: IconDoorEnter, label: "Посещаемость", to: "/attendance" },
  { icon: IconUsersGroup, label: "Студенты и преподаватели", to: "/people" },
  { icon: IconSettings, label: "Настройки", to: "/settings" },
];

export default function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState(
    mockdata.findIndex((item) => item.to === location.pathname)
  );

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={5}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconLogout} label="Выход" />
      </Stack>
    </nav>
  );
}

// import { NavLink as MantineNavLink } from "@mantine/core";
// import { Link, useLocation } from "react-router-dom";

// export default function Navbar() {
//   const location = useLocation();

//   return (
//     <div>
//       <MantineNavLink
//         component={Link}
//         to="/test1"
//         label="Test1"
//         active={location.pathname === "/test1"}
//       />
//       <MantineNavLink
//         component={Link}
//         to="/test2"
//         label="Test2"
//         active={location.pathname === "/test2"}
//       />
//     </div>
//   );
// }
