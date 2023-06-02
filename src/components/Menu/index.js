import { Navigation, Logo, Link } from "./styled";
import { useMediaQuery } from "react-responsive";
import { theme } from "../../theme";
import logo from "../../images/logo.webp";

const Menu = () => {
    const isMobile = useMediaQuery({ maxWidth: theme.breakpoint.mobileMax });

    return (
        <Navigation>
            <Logo src={logo} alt="logo EnergyScan" width="300px" height="100px" />
            {!isMobile && (
                <div>
                    <Link href="#reasons">Kiedy potrzebne?</Link>
                    <Link href="#clients">Dla kogo?</Link>
                    <Link href="#price">Cennik</Link>
                    <Link href="#profit">Co zyskujesz?</Link>
                    <Link href="#services">Nasze usługi</Link>
                    <Link href="#aboutUs">O nas</Link>
                    <Link href="#footer">Kontakt</Link>
                </div>
            )}
        </Navigation >
    );
};

export default Menu;