import { Drawer } from "antd";
import { useState } from "react";

import { CloseMenuIcon, MenuContainer, MenuIcon } from "./Menu.styles";
import Theme from "theme/Theme";

const { colors } = Theme;

export const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <MenuContainer>
      {open ? (
        <CloseMenuIcon onClick={() => setOpen(false)} />
      ) : (
        <MenuIcon onClick={() => setOpen(true)} />
      )}
      <Drawer
        style={{ backgroundColor: colors.secondary, paddingTop: "5rem" }}
        closable={false}
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
      >
        <h2>Texto exemplo</h2>
      </Drawer>
    </MenuContainer>
  );
};
