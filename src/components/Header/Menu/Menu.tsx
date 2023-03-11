import { Drawer } from "antd";
import { ReactElement } from "react";

import { CloseMenuIcon, MenuContainer, MenuIcon } from "./Menu.styles";
import Theme from "theme/Theme";

const { colors } = Theme;

export const Menu = ({
  children,
  open,
  setOpen,
}: {
  children: ReactElement;
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
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
        width={"35rem"}
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
      >
        {children}
      </Drawer>
    </MenuContainer>
  );
};
