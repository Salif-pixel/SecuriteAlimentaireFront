
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCamera,
    faCannabis,
    faRandom,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { faAsymmetrik } from "@fortawesome/free-brands-svg-icons";

const serviceList = [
    {
        icon: faCannabis,
        title: "Scan d'aliments ",
        description:
            "Utilisez la caméra du téléphone pour scanner les codes-barres ou les QR codes des produits alimentaires pour obtenir des informations sur les ingrédients, la date d'expiration, et la présence de substances nocives ou d'allergènes.",
    },
    {
        icon: faRandom,
        title: "Notification en temps réel ",
        description:
            " Envoyez des notifications push pour informer les utilisateurs des rappels de produits, des nouvelles alertes de sécurité alimentaire, ou des mises à jour importantes concernant leurs aliments scannés.",
    },
    {
        icon: faCamera,
        title: "Base de données des aliments",
        description:
            "Une base de données détaillée contenant des informations sur une grande variété de produits alimentaires, y compris les ingrédients, les valeurs nutritionnelles, et les alertes sur les substances nocives ou les allergènes connus",
    },
    {
        icon: faAsymmetrik,
        title: "Profil utilisateur",
        description:
            "Permettez aux utilisateurs de créer des profils personnels où ils peuvent enregistrer leurs allergies, préférences alimentaires, et historiques de scan.",
    },
];

const ServiceItem = ({ service }: any) => (
    <div className="bg-white  shadow h-full p-3 md:mt-4">
        <div className="p-4 lg:p-8">
            <div className="text-[40px] text-orangeSmart mb-2">
                <FontAwesomeIcon icon={service.icon} />
            </div>
            <h5 className="text-xl font-medium my-6">{service.title}</h5>
            <p className="opacity-75 mt-4">{service.description}</p>
        </div>
    </div>
);

ServiceItem.propTypes = {
    service: PropTypes.object.isRequired,
};

function ShapeOne() {
    return (
        <svg
            className="absolute -bottom-[20%] left-0 -z-[1]"
            width="405"
            height="626"
            viewBox="0 0 405 626"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="-302.65"
                y="296.986"
                width="433.92"
                height="140"
                rx="73.8464"
                transform="rotate(-33.796 -302.65 296.986)"
                fill="#F37121"

            />
            <rect
                x="-315"
                y="502.403"
                width="666.584"
                height="140"
                rx="73.8464"
                transform="rotate(-33.796 -315 502.403)"
                fill="#FAA515"

            />
        </svg>
    );
}

function ShapeTwo() {
    return (
        <svg
            className="absolute right-0 -z-[1]"
            width="340"
            height="658"
            viewBox="0 0 495 778"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="489" cy="389" r="389" fill="#F37121"  />
        </svg>
    );
}

export const Service = () => {
    return (
        <div>
            <section className="ezy__service20 light py-14 md:py-24 bg-white text-zinc-900 relative z-[1] overflow-hidden">
                <ShapeOne/>
                <ShapeTwo/>

                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 md:col-span-4">
                            <h2 className="text-3xl md:text-[40px] font-bold leading-normal mb-4">
                                Dans un monde où la sécurité alimentaire est une préoccupation croissante
                            </h2>
                            <p className="text-[17px] leading-normal opacity-80">
                                une application de gestion de sécurité alimentaire devient essentielle pour protéger la santé des consommateurs.
                            </p>
                        </div>
                        <div className="col-span-12 md:col-span-8">
                            <div className="grid grid-cols-2 gap-6 gap-x-5">
                                <div className="col-span-2 md:col-span-1">
                                    {serviceList.slice(0, 2).map((service, i) => (
                                        <div key={i}>
                                            <ServiceItem service={service}/>
                                        </div>
                                    ))}
                                </div>

                                <div className="col-span-2 md:col-span-1 md:mt-12">
                                    {serviceList.slice(2, 4).map((service, i) => (
                                        <div key={i}>
                                            <ServiceItem service={service}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

