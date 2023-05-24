import { Article, Photo, Container, Wrapper } from "./styled";
import { Title, Section } from "../styled";
import certyfikate from "../../../images/certyfikate.svg";
import certyfikate1 from "../../../images/why.svg";
import { reasons } from "./reasons";
import ReasonsBox from "./ReasonsBox";

const Reasons = () => (
    <Section id="reasons">
        <Title> Dlaczego potrzebujesz świadectwa charakterystyki energetycznej? </Title>
        <Article>Świadectwo charakterystyki energetycznej jest dokumentem, który informuje o efektywności energetycznej danego budynku. Wymóg posiadania certyfikatu dotyczy wszystkich budynków, niezależnie od roku budowy. Obowiązek zależy natomiast od podejmowanych działań.</Article>
        <Container>
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
            <div>
                <Photo src={certyfikate} alt="Certyfikat energetyczny" />
                <Photo src={certyfikate1} alt="Certyfikat energetyczny" />
            </div>
        </Container>
    </Section >
);

export default Reasons;