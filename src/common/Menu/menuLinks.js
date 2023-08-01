import { MenuLink, Wrapper } from "./styled";

const MenuLinks = ({handleLinkClick}) => {

  return (
    <Wrapper>
      <MenuLink href="#kiedy-potrzebne" onClick={handleLinkClick}>Kiedy potrzebne?</MenuLink>
      <MenuLink href="#dla-kogo" onClick={handleLinkClick}>Dla kogo?</MenuLink>
      <MenuLink href="#cennik" onClick={handleLinkClick}>Cennik</MenuLink>
      <MenuLink href="#co-zyskujesz" onClick={handleLinkClick}>Co zyskujesz?</MenuLink>
      <MenuLink href="#o-nas" onClick={handleLinkClick}>O nas</MenuLink>
      <MenuLink href="#nasze-uslugi" onClick={handleLinkClick}>Nasze usługi</MenuLink>
      <MenuLink href="#kontakt" onClick={handleLinkClick}>Kontakt</MenuLink>
    </Wrapper>
  );
};

export default MenuLinks;
