import { Section, Wrapper, Title } from './styled';
import PriceBox from './PriceBox';
import dom from '../../images/dom.svg';
import blok from '../../images/blok.svg';
import lokal from '../../images/lokal.svg';

const prices = [
  {
    subtitle: 'Mieszkanie',
    imgSrc: blok,
    price: 700,
  },
  {
    subtitle: 'Dom',
    imgSrc: dom,
    price: 800,
  },
  {
    subtitle: 'Lokal',
    imgSrc: lokal,
    price: 1000,
  },
];

const Cennik = () => (
  <Section id="cennik">
    <Title> Ile to kosztuje? </Title>
    <p>
      {' '}
      Cena za świadectwo energetyczne zależy od rodzaju nieruchomości i jej
      specyfiki{' '}
    </p>
    <p> Pamiętaj! Kara urzędowa za brak świadectwa to 5000 zł </p>
    <Wrapper>
      {prices.map(({ subtitle, imgSrc, price }) => (
        <PriceBox
          key={subtitle}
          subtitle={subtitle}
          imgSrc={imgSrc}
          price={price}
        />
      ))}
    </Wrapper>
  </Section>
);

export default Cennik;
