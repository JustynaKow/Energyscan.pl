import { Subtitle, Wrapper, Object, List, Item } from "./styled";
import { Section, Title, Article } from "../styled";
import { services } from "./services";

const Services = ({ title }) => (
    <Section id="nasze-uslugi">
        <Title> {title} </Title>
        <Article>
            Jesteśmy zespołem profesjonalistów, specjalizujących się w dziedzinie energetyki.
            Działamy z pełnym zaangażowaniem, aby pomóc naszym klientom w efektywnym zarządzaniu energią oraz poprawie wydajności ich instalacji.
            Oferujemy usługi, które są kluczowe dla osiągnięcia tych celów:
        </Article>
        <Wrapper>
                {services.map(({ photoSrc, alt, subtitle, description }, index) => (
                    <div key={`service-${index}`}>
                        <Object>
                            <img src={photoSrc} alt={alt} width="200px" height="200px" />
                            <Subtitle>{subtitle}</Subtitle>
                        </Object>
                        <List>
                            {description.map((item, itemIndex) => (
                                <Item key={`item-${index}-${itemIndex}`}>{item}</Item>
                            ))}
                        </List>
                    </div>
                ))}
        </Wrapper>
    </Section>
);

export default Services;