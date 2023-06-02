import { Article, Photo, Container, Wrapper } from "./styled";
import { Title, Section } from "../styled";
import certyfikate from "../../../images/certyfikate.svg";
import { reasons } from "./reasons";
import ReasonsBox from "./ReasonsBox";

const Reasons = ({ title }) => (
    <Section id="reasons">
        <Title> {title} </Title>
        <Container>
            <div>
                <Article>
                    Świadectwo charakterystyki energetycznej jest dokumentem, który informuje o efektywności energetycznej danego budynku Obowiązek zależy od podejmowanych działań.
                </Article>
                <Photo src={certyfikate} alt="Certyfikat energetyczny" width="500px" />
            </div>
            <Wrapper>
                {reasons.map(({ photo, title, article }) => (
                    <ReasonsBox
                        key={title}
                        photo={photo}
                        title={title}
                        article={article}
                    />
                ))}
            </Wrapper>
        </Container>
    </Section >
);

export default Reasons;