import Contact from "../constants";
import phone from "../images/footer_phone.webp";
import mail from "../images/footer_mail.webp";
import media from "../images/footer_facebook.webp";

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