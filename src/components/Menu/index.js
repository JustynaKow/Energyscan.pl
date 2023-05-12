import { Navigation, Logo, Link } from "./styled";
import firma from "../../images/energyscan.png";
import { useMediaQuery } from "react-responsive";
import { theme } from "../../theme";

const Menu = () => {
    const isMobile = useMediaQuery({ maxWidth: theme.breakpoint.mobileMax });

    return (
        <Navigation>
            <Logo src={firma} alt="logo EnergyScan" />
            {!isMobile && (
                <div>
                    <Link href="#przeslanki">Dlaczego muszę to mieć?</Link>
                    <Link href="#cennik">Ile to kosztuje?</Link>
                    <Link>Nasze usługi</Link>
                    <Link>FAQ</Link>
                    <Link>O nas</Link>
                    <Link>Kontakt</Link>
                </div>
            )}
        </Navigation >
    );
};

export default Menu;