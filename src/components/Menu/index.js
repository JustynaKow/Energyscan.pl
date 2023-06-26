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
                    <Link href="#kiedy-potrzebne">Kiedy potrzebne?</Link>
                    <Link href="#dla-kogo">Dla kogo?</Link>
                    <Link href="#cennik">Cennik</Link>
                    <Link href="#co-zyskujesz">Co zyskujesz?</Link>
                    <Link href="#nasze-uslugi">Nasze usługi</Link>
                    <Link href="#o-nas">O nas</Link>
                    <Link href="#kontakt">Kontakt</Link>
                </div>
            )}
        </Navigation >
    );
};

export default Menu;