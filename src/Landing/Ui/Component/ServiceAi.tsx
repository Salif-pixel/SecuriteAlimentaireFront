
import PropTypes from "prop-types";

import { faCannabis, faRandom } from "@fortawesome/free-solid-svg-icons";
import human from "../../../assets/scan.mp4";
import { motion } from "framer-motion";


const features = [
    {
        icon: faCannabis,
        title: "Détection des Contaminants ",
        desc: "L'IA peut analyser les données provenant des scans des aliments pour identifier la présence de contaminants tels que des pesticides, des métaux lourds ou des agents pathogènes. Grâce à des algorithmes avancés, elle peut détecter des traces qui pourraient échapper aux méthodes d'analyse traditionnelles.",
    },
    {
        icon: faRandom,
        title: "Évaluation des Valeurs Nutritionnelles",
        desc: "L'IA peut fournir des évaluations précises des valeurs nutritionnelles des aliments en analysant leur composition. Cela permet non seulement de vérifier la qualité nutritionnelle des produits, mais aussi de conseiller les consommateurs sur des choix alimentaires plus sains en fonction de leurs besoins spécifiques.",
    },
    {
        icon: faCannabis,
        title: "Conformité aux Normes de Sécurité Alimentaire",
        desc: "En utilisant des modèles d'apprentissage automatique, l'IA peut comparer les résultats des tests alimentaires aux normes de sécurité en vigueur. Cela aide à garantir que les produits respectent les régulations et les standards de qualité, réduisant ainsi le risque de non-conformité.",
    },
    {
        icon: faRandom,
        title: "Prédiction et Prévention",
        desc: "L'IA peut analyser les tendances et les données historiques pour prédire d'éventuels problèmes de sécurité alimentaire avant qu'ils ne surviennent. Par exemple, elle peut identifier des schémas récurrents de contamination ou de déviation par rapport aux normes, permettant une intervention précoce et proactive pour éviter des crises potentielles.",
    },
];

const FeatureItem = ({ feature }:any) => {
    return (
        <div className="relative p-4 md:p-10">
            <div className="h-16 w-16 text-3xl mb-6 mr-6">

            </div>
            <div>
                <h4 className="text-2xl text-greenSmart font-bold mb-4">{feature.title}</h4>
                <p className="opacity-70">{feature.desc}</p>
            </div>
        </div>
    );
};

FeatureItem.propTypes = {
    feature: PropTypes.object.isRequired,
};

export const ServiceAi = () => {
    return (
        <div className="bg-white  text-zinc-900 ">

            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    <div className="w-full lg:w-1/3 lg:order-2">
                        <motion.div initial={{scale:1.2}} className="hidden md:block rounded-b-[200px] text-center h-full mt-10 md:mt-80 ">
                            <video
                                className="w-full h-auto"
                                autoPlay
                                muted
                                loop

                            >
                                <source src={human}/>
                                Your browser does not support the video tag.
                            </video>
                        </motion.div>
                    </div>
                    <div className="w-full lg:w-2/3">
                        <div className="xl:ml-6 w-full">
                            <div className="grid grid-cols-2 w-full">
                                {features.map((feature, i) => (
                                    <div className="col-span-2 lg:col-span-1" key={i}>
                                    <FeatureItem feature={feature} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

