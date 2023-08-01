import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Navigation, Logo, Hamburger } from "./styled";
import { theme } from "../../theme";
import logo from "../../images/logo.svg";
import hamburger from "../../images/hamburger.svg";
import MenuLinks from "./menuLinks";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: theme.breakpoint.tabletMax });

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navigation>
      <Logo src={logo} alt="logo EnergyScan" />
      {isMobile ? (
        <>
          <Hamburger src={hamburger} alt="menu" onClick={handleMenuToggle} />
          {isMenuOpen && <MenuLinks handleLinkClick={handleLinkClick}/>}
        </>
      ) : (
        <MenuLinks />
      )}
    </Navigation>
  );
};

export default Menu;
