import { Wrapper } from "./styled";
import { useMediaQuery } from "react-responsive";
import { theme } from "../../theme";

const Formularz = () => {
    const isMobile = useMediaQuery({ maxWidth: theme.breakpoint.mobileMax });

    return (
        !isMobile && (
            <Wrapper>

            </Wrapper>
        )
    );
};

export default Formularz;