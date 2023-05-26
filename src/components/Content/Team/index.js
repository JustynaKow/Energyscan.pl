import { Section, Title } from "../styled";
import { advantages } from "./advantages";
import AdvantagesBox from "./AdvantagesBox";

const Team = () => (
    <Section id="aboutUs">
        <Title>Co nas wyróżnia</Title>
        {advantages.map(({ subtitle, article }) => (
            <AdvantagesBox
                key={subtitle}
                subtitle={subtitle}
                article={article}
            />
        ))}
    </Section>
);

export default Team;