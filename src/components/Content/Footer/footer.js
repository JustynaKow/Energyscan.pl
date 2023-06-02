import Contact from "../../../constants";
import phone from "../../../images/tel.webp";
import mail from "../../../images/mail.webp";
import media from "../../../images/media.webp";

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
    link: `${Contact.FACEBOOK}`,
    src: media,
    alt: `facebook`,
    description: `Facebook`,
},
];