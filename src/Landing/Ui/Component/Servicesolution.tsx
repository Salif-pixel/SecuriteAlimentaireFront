
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBrain,
    faDesktop,
    faMobileAlt,

} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const serviceList = [
    {
        icon: faMobileAlt,
        title: "Application mobile ",
        description:
            "Découvrez notre application mobile innovante pour la gestion de la sécurité alimentaire. Suivez et gérez les stocks, surveillez la qualité des produits et recevez des alertes en temps réel sur les risques potentiels. Assurez-vous que les aliments respectent les normes de sécurité les plus strictes, tout en gardant une vue d'ensemble sur les opérations.",
    },
    {

        icon: faBrain,
        title: "Intelligence artificielle",
        description:
            "Notre solution d'IA avancée analyse les composants des aliments pour garantir leur sécurité. Grâce à des algorithmes de pointe, nous pouvons détecter les contaminants, évaluer les valeurs nutritionnelles et assurer la conformité aux normes de sécurité alimentaire. Protégez les consommateurs et maintenez la qualité des produits avec notre technologie innovante.",
    },
    {
        icon: faDesktop,
        title: "Interface web",
        description:
            " Grace a notre plateforme web vous aurez toutes les informations par rapport a notre application",
    },
];

const ServiceItem = ({ service }:any) => (
    <div
        className={`group bg-transparent hover:bg-greenSmart transition duration-300 hover:text-white h-full ${
            service.isActive && "bg-gray-700 text-white"
        }`}
    >
        <div className="p-6 lg:py-12 ">
            <div
                className={`bg-purpleSmart bg-opacity-10 text-purpleSmart w-32  h-32 rounded-full text-6xl inline-flex justify-center items-center group-hover:bg-white group-hover:bg-opacity-10 group-hover:text-white ${
                    service.isActive && "bg-white bg-opacity-10 text-white"
                }`}
            >
                <FontAwesomeIcon icon={service.icon} />
            </div>
            <h4 className="text-3xl  font-medium mb-4 mt-6">{service.title}</h4>
            <p className=" font-bold  opacity-70">{service.description}</p>
        </div>
    </div>
);

ServiceItem.propTypes = {
    service: PropTypes.object.isRequired,
};

export const ServiceSolution= () => {
    return (
        <div className="ezy__service10 light py-14 md:py-24 bg-white ] text-zinc-900 ">
            <div className="container relative">
                <div className="flex justify-center md:justify-start mb-12">
                </div>
                <div className="grid grid-cols-3 gap-6 text-center">
                    {serviceList.map((service, i) => (
                        <div className="col-span-3 md:col-span-1" key={i}>
                            <ServiceItem service={service} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

