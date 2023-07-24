import { Section, Title } from "../styled";
import { Subtitle, Container, Element, Image } from "./styled";
import loupe from "../../../images/loupe.svg";

const Advantages = ({ title }) => {

    const advantages = [
        "Wszechstronna i wykształcona kadra",
        "Gwarancja jakości",
        "Certyfikowani i doświadczeni Audytorzy",
        "Kompleksowe wsparcie",
    ];

    return (
        <Section id="o-nas">
            <Title>{title}</Title>
            <Container>
                {advantages.map((item, itemIndex) => (
                    <Element key={itemIndex}>
                        <Image src={loupe} alt="team" />
                        <Subtitle> {item} </Subtitle>
                    </Element>
                ))}
            </Container>
        </Section>
    )
};

export default Advantages;