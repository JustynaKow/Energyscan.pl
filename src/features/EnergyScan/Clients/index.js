import { Title, Section, Article } from "../styled";
import { Subtitle, Wrapper, Container } from "./styled";
import { person } from "./person";

const Clients = ({ title }) => (
        <Section id="dla-kogo">
            <Title>
                {title}
            </Title>
            <Article>
                W przypadku braku świadectwa charakterystyki energetycznej podczas wynajmu lub
                sprzedaży nieruchomości istnieje ryzyko otrzymania grzywny o wysokości nawet do
                <strong> 5 tysięcy złotych.</strong>
            </Article>
            <Container>
                    {person.map(({ subtitle, imgSrc }) => (
                        <Wrapper key={subtitle}>
                            <img src={imgSrc} width="180px" height="180px" alt={subtitle} />
                            <Subtitle>{subtitle}</Subtitle>
                        </Wrapper>
                    ))}
            </Container>
        </Section>
    );

export default Clients;