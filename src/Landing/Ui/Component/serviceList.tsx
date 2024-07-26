
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const serviceList = [
    {
        icon: faCannabis,
        title: "Historique des scans",
        description:
            "Un historique des aliments scannés avec des détails sur chaque scan, permettant aux utilisateurs de revoir les informations sur les produits qu'ils ont scannés auparavant.",
    },
    {
        icon: faCannabis,
        title: "Évaluation et commentaires",
        description:
            "Permettez aux utilisateurs de laisser des avis et des commentaires sur les produits scannés, créant ainsi une communauté de partage d'informations et d'expériences.",
    },
    {
        icon: faCannabis,
        title: "Personnalisation des alertes",
        description:
            "Permettez aux utilisateurs de personnaliser leurs alertes en fonction de leurs besoins spécifiques, comme les alertes pour les allergennes ou les substances spécifiques.",
    },
];

const ServiceItem = ({ service }:any) => (
    <div className="bg-white shadow-xl rounded-xl h-full">
        <div className="p-6 md:p-12">
            <div className="w-[75px] h-[75px] rounded-full text-[26px] text-orangeSmart shadow-xl flex justify-center items-center mb-6">
                <FontAwesomeIcon icon={service.icon} />
            </div>
            <h4 className="text-2xl mb-6 font-bold">{service.title}</h4>
            <p className="opacity-70 leading-[1.8]">{service.description}</p>
        </div>
    </div>
);

ServiceItem.propTypes = {
    service: PropTypes.object.isRequired,
};

export const ServiceList = () => {
    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, y: 0}}
                    transition={{type: "spring", stiffness: 100, damping: 25}} className={`h-full overflow-hidden`}>
            <section className=" light py-14 md:py-24 bg-white  text-zinc-900  relative z-[1]">
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, y: 0}}
                            transition={{type: "spring", stiffness: 100, damping: 25}}
                            className="absolute bottom-0 left-0 right-0 h-1/2 w-full bg-orangeSmart  -z-[1]"/>
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col md:flex-row gap-6 justify-between">
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-[45px] font-bold mb-6">
                                Nos autres services
                            </h2>
                            <p className="text-lg opacity-80">
                                Cette application révolutionnaire utilise la technologie pour garantir que les aliments que nous consommons sont sûrs et exempts de substances nocives, ou d'allergenes
                            </p>
                        </div>

                    </div>
                    <div className="grid grid-cols-6 gap-6 max-w-7xl mx-auto mt-12">
                        {serviceList.map((service, i) => (
                            <motion.div initial={{opacity: 0, y: 200}} whileInView={{opacity: 1, y: 0}}
                                        transition={{type: "spring", stiffness: 100, damping: 25}}
                                        className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
                                <ServiceItem service={service}/>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

