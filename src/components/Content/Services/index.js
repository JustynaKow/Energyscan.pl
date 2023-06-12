import { Description, Subtitle, Wrapper, Object, List, Item, Image } from "./styled";
import { Section, Title } from "../styled";
import miernik from "../../../images/miernik.jpg";
import { services } from "./services";

const Services = ({ title }) => (
    <Section id="services">
        <Title> {title} </Title>
        <Description>
            Jesteśmy zespołem profesjonalistów, specjalizujących się w dziedzinie energetyki. <br />
            Działamy z pełnym zaangażowaniem, aby pomóc naszym klientom w efektywnym zarządzaniu energią oraz poprawie wydajności ich instalacji. <br />
            Oferujemy usługi, które są kluczowe dla osiągnięcia tych celów:
        </Description>
        <Wrapper>
            <div>
                {services.map(({ photoSrc, alt, subtitle, description }, index) => (
                    <div key={`service-${index}`}>
                        <Object>
                            <img src={photoSrc} alt={alt} width="50px" height="50px" />
                            <Subtitle>{subtitle}</Subtitle>
                        </Object>
                        <List>
                            {description.map((item, itemIndex) => (
                                <Item key={`item-${index}-${itemIndex}`}>{item}</Item>
                            ))}
                        </List>
                    </div>
                ))}
            </div>
            <Image src={miernik} alt="miernik elektryczny"/>
        </Wrapper>
    </Section>
);

export default Services;