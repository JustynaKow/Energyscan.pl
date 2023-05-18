import Menu from "./Menu";
import Title from "./Title";
import { StyledHeader, Information, Paragraph, Wrapper, Object, Photo, Article } from "./styled";
import location from "../../images/1.svg";
import time from "../../images/2.svg";
import responsible from "../../images/3.svg";

const Header = () => (
    <StyledHeader>
        <Menu />
        <Title />
        <Information>
            <Paragraph>Obowiązek posiadania świadectw od dnia 29.04.2023</Paragraph>
        </Information>
        <Wrapper>
            <Object>
                <Photo src={location} alt="lokalnie"/>
                <h4>Lokalnie</h4>
                <Article>Nasza renomowana firma działa lokalnie na obszarze województwa podlaskiego, dostarczając wysokiej jakości usługi zgodnie z indywidualnymi potrzebami klientów. </Article>
            </Object>
            <Object>
                <Photo src={time} alt="na czas"/>
                <h4>Na czas</h4>
                <Article>Działamy profesjonalnie i terminowo, trzymając się naszych ustalonych terminów, aby zapewnić pełne zadowolenie naszych klientów.</Article>
            </Object>
            <Object>
                <Photo src={responsible} alt="odpowiedzialnie"/>
                <h4>Odpowiedzialnie</h4>
                <Article>Posiadamy wszystkie niezbędne uprawnienia i kwalifikacje, aby sporządzać świadectwa, co świadczy o naszej odpowiedzialności i zaangażowaniu w każde powierzone zadanie.</Article>
            </Object>
        </Wrapper>
    </StyledHeader>
);

export default Header;