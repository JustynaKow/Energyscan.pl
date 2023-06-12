import { Title, Section } from "../styled";
import { Paragraph, Wrapper, Image, Article, Container, Case } from "./styled";
import people from "../../../images/human.webp";
import houses from "../../../images/houseNew.jpg";

const Clients = ({ title }) => {

    const persons = [
        "Właściciel",
        "Zarządca",
        "Osoby, którym przysługuje spółdzielcze własnościowe lub lokatorskie prawo do lokalu mieszkalnego",
        "Każdy, kto będzie chciał sprzedać lub wynająć nieruchomość",
    ];

    return (
        <Section id="clients">
            <Title>
                {title}
            </Title>
            <Container>
                <Case>
                    {persons.map((person) => (
                        <Wrapper key={person}>
                            <img src={people} width="50px" height="50px" alt="ikona osoby" />
                            <Paragraph>
                                {person}
                            </Paragraph>
                        </Wrapper>
                    ))}
                </Case>
                <div>
                    <Article>
                        W przypadku braku świadectwa charakterystyki energetycznej podczas wynajmu lub
                        sprzedaży nieruchomości istnieje ryzyko otrzymania grzywny o wysokości nawet do 
                        <strong> 5 tysięcy złotych.</strong>
                    </Article>
                    <Image src={houses} alt="energooszczędny dom" />
                </div>
            </Container>
        </Section>
    );
};

export default Clients;