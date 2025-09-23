import { Tooltip, UnstyledButton, Text, useMatches } from "@mantine/core";
import classes from "./NavbarLink.module.css";
import { Link } from "react-router-dom";

import { useNavbar } from "../context/NavbarContext";

export default function NavbarLink({ icon: Icon, label, active, to, onClick }) {
  const { opened, isMobile } = useNavbar();

  const showLabel = isMobile && opened;

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
        {showLabel && (
          <Text className={classes.label} truncate>
            {label}
          </Text>
        )}
      </UnstyledButton>
    </Tooltip>
  );
}
