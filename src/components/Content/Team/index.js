import { Section, Title } from "../styled";
import { advantages } from "./advantages";
import AdvantagesBox from "./AdvantagesBox";

const Team = () => (
    <Section id="aboutUs">
        <Title>Co nas wyróżnia</Title>
        {advantages.map(({ photo, subtitle, article }) => (
            <AdvantagesBox
                key={subtitle}
                photo={photo}
                subtitle={subtitle}
                article={article}
            />
        ))}
    </Section>
);

export default Team;