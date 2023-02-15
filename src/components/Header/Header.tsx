import { MenuProps } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { RoutePaths } from "enums/RoutePaths";
import {
  DownloadIcon,
  HeaderContainer,
  Navigation,
  StyledLink,
  Title,
} from "./Header.style";

export const Header = () => {
  const [currentTab, setCurrentTab] = useState("home");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case RoutePaths.ABOUT:
        setCurrentTab("about");
        break;
      case RoutePaths.DONATIONS:
        setCurrentTab("donation");
        break;
      default:
        setCurrentTab("home");
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrentTab(e.key);
  };

  const items = [
    {
      label: <Link to={RoutePaths.ABOUT}>Sobre</Link>,
      key: "about",
    },
    {
      label: <Link to={RoutePaths.PROFESSIONALS}>Profissionais</Link>,
      key: "contact",
    },
    {
      label: <Link to={RoutePaths.DONATIONS}>Doação por Pix</Link>,
      key: "donation",
    },
    {
      label: "Prestação de contas",
      key: "transparency",
      children: [
        {
          type: "group",
          label: (
            <>
              <DownloadIcon />
              <StyledLink
                href={require("assets/files/estatuto-de-pe.pdf")}
                download={"Estatuto De Pé"}
              >
                Baixar estatuto
              </StyledLink>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <HeaderContainer>
      <Title to={RoutePaths.HOME} onClick={() => setCurrentTab("home")}>
        Instituto De Pé
      </Title>

      <Navigation
        onClick={onClick}
        disabledOverflow
        selectedKeys={[currentTab]}
        mode="horizontal"
        items={items}
      />
    </HeaderContainer>
  );
};
