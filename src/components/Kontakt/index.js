import { Wrapper, Paragraph, Phone } from "./styled";

const Kontakt = () => (
    <Wrapper>
        <Paragraph>
            Masz pytania?
        </Paragraph>
        <Phone href="tel: +48783737050">
            zadzwoń +48 783 737 050
        </Phone>
    </Wrapper>
);

export default Kontakt;