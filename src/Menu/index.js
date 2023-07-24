import { Navigation, Logo, MenuLink, StyledLink } from "./styled";
import { useMediaQuery } from "react-responsive";
import { theme } from "../theme";
import logo from "../images/logo.webp";

const Menu = () => {
    const isMobile = useMediaQuery({ maxWidth: theme.breakpoint.mobileMax });
    const scrollToUp = () => (window.scrollTo({ top: 0 }));

    return (
        <Navigation>
            <Logo src={logo} alt="logo EnergyScan" width="300px" height="100px" />
            {!isMobile && (
                <div>
                    <StyledLink to="/" onClick={scrollToUp}>Home</StyledLink>
                    <MenuLink href="#kiedy-potrzebne">Kiedy potrzebne?</MenuLink>
                    <MenuLink href="#dla-kogo">Dla kogo?</MenuLink>
                    <MenuLink href="#cennik">Cennik</MenuLink>
                    <MenuLink href="#co-zyskujesz">Co zyskujesz?</MenuLink>
                    <MenuLink href="#nasze-uslugi">Nasze usługi</MenuLink>
                    <MenuLink href="#o-nas">O nas</MenuLink>
                    <MenuLink href="#kontakt">Kontakt</MenuLink>
                </div>
            )}
        </Navigation >
    );
};

export default Menu;