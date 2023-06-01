import Contact from "../../../constants";
import phone from "../../../images/tel.svg";
import mail from "../../../images/mail.svg";
import location from "../../../images/location.svg";
import media from "../../../images/media.svg";

export const footer = [
{
    link: `tel:${Contact.PHONE}`,
    src: phone,
    alt: `telefon`,
    description: `Zadzwoń do nas: +48 530 196 930`,
},
{
    link: `mailto:${Contact.EMAIL}`,
    src: mail,
    alt: `e-mail`,
    description: `${Contact.EMAIL}`,
},
{
    link: `${Contact.ADRESS}`,
    src: location,
    alt: `adres`,
    description: `ul. Ks. J.J. Zawadzkiego 2 lok.012, 16-400 Suwałki`,
},
{
    link: `${Contact.FACEBOOK}`,
    src: media,
    alt: `facebook`,
    description: `Facebook`,
},
];