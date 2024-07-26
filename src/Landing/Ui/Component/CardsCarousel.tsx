import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faVimeo,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const teamSections = [
    {
        title: "Pole Design",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        members: [
            {
                img: "https://cdn.easyfrontend.com/pictures/team/team_13_1.jpg",
                name: "KHAN SAHEB",
                designation: "UI Design",
                socialLinks: [
                    { icon: faTwitter, href: "#!" },
                    { icon: faFacebook, href: "#!" },
                    { icon: faVimeo, href: "#!" },
                ],
            },
            {
                img: "https://cdn.easyfrontend.com/pictures/team/team_square_1.jpeg",
                name: "Akshay Kumar",
                designation: "UI Design",
                socialLinks: [
                    { icon: faTwitter, href: "#!" },
                    { icon: faFacebook, href: "#!" },
                    { icon: faVimeo, href: "#!" },
                ],
            },
            {
                img: "https://cdn.easyfrontend.com/pictures/team/team_square_2.jpeg",
                name: "Raima Ray",
                designation: "UI Design",
                socialLinks: [
                    { icon: faTwitter, href: "#!" },
                    { icon: faFacebook, href: "#!" },
                    { icon: faVimeo, href: "#!" },
                ],
            },

        ],
    },
    {
        title: "Pole Dev Web",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        members: [
            {
                img: "https://cdn.easyfrontend.com/pictures/team/team_13_2.jpg",
                name: "Aliou Akbar",
                designation: "Dev Web",
                socialLinks: [
                    { icon: faTwitter, href: "#!" },
                    { icon: faFacebook, href: "#!" },
                    { icon: faVimeo, href: "#!" },
                ],
            },
            {
                img: "https://cdn.easyfrontend.com/pictures/team/team_square_3.jpeg",
                name: "Arjun Kapur",
                designation: "Dev Web",
                socialLinks: [
                    { icon: faTwitter, href: "#!" },
                    { icon: faFacebook, href: "#!" },
                    { icon: faVimeo, href: "#!" },
                ],
            },
            {
                img: "https://cdn.easyfrontend.com/pictures/team/team_square_4.jpeg",
                name: "Alia Bhatt",
                designation: "Dev Web",
                socialLinks: [
                    { icon: faTwitter, href: "#!" },
                    { icon: faFacebook, href: "#!" },
                    { icon: faVimeo, href: "#!" },
                ],
            },

        ],
    },
    {
        title: "Pole Base de donnee",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        members: [
            {
                img: "https://cdn.easyfrontend.com/pictures/team/team_13_3.jpg",
                name: "Sadab Bean",
                designation: "Base de donnee",
                socialLinks: [
                    { icon: faTwitter, href: "#!" },
                    { icon: faFacebook, href: "#!" },
                    { icon: faVimeo, href: "#!" },
                ],
            },
            {
                img: "https://cdn.easyfrontend.com/pictures/users/user16.jpg",
                name: "Zara Smith",
                designation: "Base de donnee",
                socialLinks: [
                    { icon: faTwitter, href: "#!" },
                    { icon: faFacebook, href: "#!" },
                    { icon: faVimeo, href: "#!" },
                ],
            },
            {
                img: "https://cdn.easyfrontend.com/pictures/users/user20.jpg",
                name: "Ali Kapy",
                designation: "Base de donnee",
                socialLinks: [
                    { icon: faTwitter, href: "#!" },
                    { icon: faFacebook, href: "#!" },
                    { icon: faVimeo, href: "#!" },
                ],
            },

        ],
    },
];

const TeamMemberItem = ({ member }) => (
    <motion.div initial={{opacity: 0, y: 200}} whileInView={{opacity: 1, y: 0}}
                transition={{type: "spring", stiffness: 100, damping: 25}} className="group relative">
        <img src={member.img} alt={member.name} className="h-auto w-full mx-auto" />
        <div className="absolute -bottom-12 left-[10%] p-5 w-[80%] bg-white shadow-xl dark:bg-slate-800 text-center overflow-hidden z-[1] group-hover:bg-purpleSmart group-hover:pt-7 group-hover:px-5 group-hover:pb-20 duration-300 group-hover:text-white">
            <h3 className="text-xl font-semibold leading-normal opacity-80 mb-1">
                {member.name}
            </h3>
            <p className="text-[17px] leading-normal opacity-80 mb-2">
                {member.designation}
            </p>

            <div className="absolute w-full left-0 top-auto opacity-0 translate-y-7 group-hover:opacity-100 group-hover:translate-y-0 mt-1">
                <ul className="flex justify-center items-center">
                    {member.socialLinks.map((item, i) => (
                        <li key={i}>
                            <a
                                href={item.href}
                                className="w-10 h-10 text-[26px] text-center hover:text-purpleSmart mt-2 mr-2 opacity-90 p-0 relative z-[1] inline-flex justify-center items-center before:absolute before:w-full before:h-full before:opacity-0 before:translate-y-full before:bg-slate-800 before:-z-[1] hover:before:opacity-100 hover:before:translate-y-0 transition duration-300"
                            >
                                <FontAwesomeIcon icon={item.icon} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </motion.div>
);

TeamMemberItem.propTypes = {
    member: PropTypes.object.isRequired,
};

const TeamSection = ({ section }) => (
    <section className="ezy__team12 light py-14 md:py-24 bg-white text-zinc-900 dark:text-purpleSmart overflow-hidden">
        <div className="container px-4 mx-auto">
            <div className="flex justify-center text-center">
                <div className="sm:max-w-md">
                    <h3 className="text-3xl leading-none md:text-[45px] font-bold">
                        {section.title}
                    </h3>
                    <p className="text-[17px] leading-normal opacity-80 mt-4 mb-12">
                        {section.description}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {section.members.map((member, i) => (
                    <div className="col-span-3 lg:col-span-1 my-12 lg:my-0 xl:p-12" key={i}>
                        <TeamMemberItem member={member} />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

TeamSection.propTypes = {
    section: PropTypes.object.isRequired,
};

export const TeamMember = () => {
    return (
        <motion.div  initial={{opacity: 0, y: 200}} animate={{opacity: 1, y: 0}}
                     transition={{type: "spring", stiffness: 100, damping: 25,delay:0.5}} >
            <h1 className="text-4xl md:text-[3.5rem] font-gotham font-bold text-center text-purpleSmart mb-10 mt-4">
                Rencontrez <br />
                <span className="text-5xl md:text-[6rem] font-gotham font-bold text-center mt-1 text-purpleSmart leading-none">
                    notre equipe
                </span>
            </h1>
            {teamSections.map((section, i) => (
                <TeamSection section={section} key={i} />
            ))}
        </motion.div>
    );
};
