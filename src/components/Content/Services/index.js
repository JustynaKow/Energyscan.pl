import { Wrapper, Title, Object, Circle, Subtitle, Description } from "./styled";

const Services = () => (
    <Wrapper id="services">
        <Title>Nasze usługi</Title>
        <Description>
            Jesteśmy zespołem profesjonalistów, specjalizujących się w dziedzinie energetyki. <br />
            Działamy z pełnym zaangażowaniem, aby pomóc naszym klientom w efektywnym zarządzaniu energią oraz poprawie wydajności ich instalacji. <br />
            Oferujemy trzy główne usługi, które są kluczowe dla osiągnięcia tych celów:
        </Description>
        <Object>
            <Circle>
                <Subtitle>Świadectwa charakterystyki energetycznej</Subtitle>
            </Circle>
            <Circle>
                <Subtitle>Audyty energetyczne</Subtitle>
            </Circle>
            <Circle>
                <Subtitle>Pomiary instalacji energetycznej</Subtitle>
            </Circle>
        </Object>
    </Wrapper>
);

export default Services;