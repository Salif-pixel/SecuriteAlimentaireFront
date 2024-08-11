import React, { useState } from "react";
import {
    faEnvelopeOpenText,
    faHdd,
    faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion } from "framer-motion";

// Définition des types pour les informations de contact
type ContactInfoItem = {
    icon: typeof faEnvelopeOpenText | typeof faPhoneAlt | typeof faHdd;
    label: string;
    href: string;
};

const contactInfoList: ContactInfoItem[] = [
    {
        icon: faEnvelopeOpenText,
        label: "email@easyfrontend.com",
        href: "mailto:email@easyfrontend.com",
    },
    {
        icon: faPhoneAlt,
        label: "+880 1742-0****0",
        href: "callto:+880 1742-0****0",
    },
    { icon: faHdd, label: "easyfrontend.com", href: "http://easyfrontend.com" },
];

// Définition des types pour les propriétés du composant ContactInfo
type ContactInfoProps = {
    contactInfoList: ContactInfoItem[];
};

const ContactInfo: React.FC<ContactInfoProps> = ({ contactInfoList }) => (
    <motion.div className="mt-5 pt-md-4">
        {contactInfoList.map((info, i) => (
            <div
                className="bg-gray-100 shadow max-w-[350px] mt-6 flex items-center rounded-xl p-5"
                key={i}
            >
                <FontAwesomeIcon icon={info.icon} className="text-3xl px-2" />
                <a className="text-lg text-zinc-900 font-medium ml-4" href={info.href}>
                    {info.label}
                </a>
            </div>
        ))}
    </motion.div>
);

const ContactForm: React.FC = () => {
    const [, setValidated] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <form className="" noValidate onSubmit={handleSubmit}>
            <div className="mb-4">
                <input
                    type="text"
                    className="min-h-[48px] leading-[48px] bg-[#F2F6FD] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                    placeholder="Enter Name"
                />
            </div>
            <div className="mb-4">
                <input
                    type="email"
                    className="min-h-[48px] leading-[48px] bg-[#F2F6FD] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                    placeholder="Enter Email"
                />
            </div>
            <div className="mb-4">
                <textarea
                    name="message"
                    className="min-h-[48px] leading-[48px] bg-[#F2F6FD] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                    placeholder="Enter Message"
                    rows={4}
                ></textarea>
            </div>
            <div className="text-start">
                <button
                    type="submit"
                    className="bg-greenSmart hover:bg-opacity-90 text-white px-8 py-3 rounded mb-4"
                >
                    Envoyer
                </button>
            </div>
        </form>
    );
};

const ContactFormCard: React.FC = () => (
    <div className="bg-white z-50 shadow-xl rounded-2xl p-6 md:p-12">
        <h2 className="text-2xl text-purpleSmart md:text-[45px] leading-none font-bold mb-4">
            Discutons ensemble
        </h2>
        <p className="text-lg mb-12">
            Contacter nous via mail pour plus d'aides.
        </p>

        <ContactForm />
    </div>
);

const ShapeOne: React.FC = () => (
    <svg
        className="absolute hidden lg:block top-[9%] right-0"
        width="405"
        height="626"
        viewBox="0 0 405 626"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="200"
            y="300"
            width="666.584"
            height="140"
            rx="73.8464"
            transform="rotate(-33.796 -50 250)"
            fill="#7DC242"
        />
    </svg>
);

export const ContactUs: React.FC = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className={`h-fit`}>
            <ShapeOne />
            <section className="ezy__contact9 gray py-14 md:py-24 z-50 bg-white text-zinc-900 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 50, damping: 10 }}
                    className="container px-4"
                >
                    <h1 className="text-4xl md:text-[3.5rem] font-gotham font-bold text-center text-purpleSmart mb-10 mt-4">
                        Contactez <br />
                        <span className="text-5xl md:text-[6rem] font-gotham font-bold text-center mt-1 text-greenSmart leading-none">
                            nous
                        </span>
                    </h1>
                    <div className="grid grid-cols-12 py-6 lg:gap-8">
                        <div className="col-span-12 lg:col-span-5 text-greenSmart mb-12 lg:mb-0">
                            <h2 className="text-2xl text-purpleSmart leading-none md:text-[45px] font-bold mb-6">
                                Comment pouvons nous vous aider?
                            </h2>
                            <ContactInfo contactInfoList={contactInfoList} />
                        </div>

                        <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                            <ContactFormCard />
                        </div>
                    </div>
                </motion.div>
            </section>
        </motion.div>
    );
};
