import { motion } from "framer-motion";
import {CardGradient} from "./CardGradient.tsx";
import Pourquoinous from "./Pourquoi.tsx";


const About = () => {
    const data=[
        {
            title:"Mission",
            text:"Notre mission est de révolutionner la gestion de la sécurité alimentaire en mettant à disposition des outils avancés permettant de garantir la qualité et la sécurité des aliments que vous consommez. Grâce à notre application innovante, nous visons à réduire les risques liés aux substances nocives dans les produits alimentaires en utilisant des technologies d'intelligence artificielle pour une détection rapide et précise."
        },
        {
            title: "Vision",
            text: "À long terme, nous envisageons un monde où chaque consommateur a accès à des informations claires et fiables sur la sécurité des aliments. Nous aspirons à transformer la manière dont les individus et les entreprises surveillent la qualité alimentaire, en intégrant des solutions technologiques de pointe pour créer un environnement alimentaire plus sûr et plus transparent à l’échelle mondiale."
        },
        {
            title:"Origine",
            text:"L'idée de cette application est née de la préoccupation croissante pour la sécurité alimentaire et des lacunes observées dans les outils de détection actuels. Initiée par une équipe de passionnés de technologie et de sécurité alimentaire, l'application a été conçue pour répondre à une demande croissante de solutions accessibles et efficaces pour vérifier la présence de substances nocives dans les aliments."
        },

        {
            title:"Technologie",
            text:"Notre application repose sur une combinaison de technologies de pointe, notamment des algorithmes d'intelligence artificielle et des techniques de vision par ordinateur. Ces technologies permettent une analyse rapide des aliments scannés pour détecter la présence de substances nocives. Nous utilisons des plateformes modernes pour le développement, telles que React pour le frontend et des solutions cloud pour le traitement des données, assurant ainsi une performance optimale et une sécurité renforcée."
        },

        {
            title: "Analyse Précise des Ingrédients",
            text: "qui utilise l’intelligence artificielle pour scanner et identifier tous les\n" +
                "composants des repas. Les groupes alimentaires (boissons, céréales, viandes, etc.) sont classés avec précision."
        },
        {
            title: "Conformité Halal",
            text: "Des algorithmes* spécifiques vérifient la conformité des repas aux normes Halal. Pour répondre aux critères des communautés religieuses exigeant des options Halal.\n" },
        {
            title: "Détection des Allergènes",
            text: "Notre application identifie les allergènes potentiels pour prévenir les réactions allergiques. Les consommateurs peuvent commander leur nourriture en toute confiance, sachant que leur sécurité sera prise en compte."},
        {
            title: "Substances Nocives et Nutrition",
            text: "Un système fiable intégré des drogues, poisons et venins préviendra tout risque, d'intoxication,  contamination accidentelle ou d'empoisonnement dans les repas. Les capteurs interceptent l'information  nutritionnelle à analyser puis cherchent la moindre trace de substances nocives dans le repas.  Au moindre soupçon détecté de traces de ces substances nocives, l'information est envoyée sur l'interface du téléphone pour avertir la personne. À cet effet ces technologies aident les consommateurs à s'assurer de manger sûrement et sainement  leurs repas. \n"},
        {
            title: "Apport Nutritionnel",
            text: "Par ailleurs, une fonctionnalité de calcul en apport nutritionnel des repas sera incluse dans notre application afin de permettre à tout le monde de comprendre l'apport nutritionnel bénéfique que les repas consommés génèrent sur notre santé et bien-être. C'est aussi un outil pour les sujets diabétiques, diététiques, les personnes obèses, les végétariens d'équilibrer voire calibrer leurs régimes alimentaires quotidiens en faisant un choix qui répondrait aux besoins réels de leur organisme."
        },
        {
            title: "Inclusion Sociale",
            text: "nous utilisons les technologies avancées pour faciliter la réalisation de cette application mobile avec l’intégration du TalkBack qui favorise aussi  l’utilisation de cet outil digital par les personnes malvoyantes."
        },
        {
            title: "Nos cibles",
            text: " population mondiale, chaines de restauration rapide, chaines hôtelières, milieu du tourisme, restaurants universitaires, cantines scolaires, pensionnats, mais aussi le milieu des athlètes et sportifs."
        }

    ]
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}  >
            <h1 className="text-4xl md:text-[3.5rem] font-gotham font-bold text-center text-pinkSmart mb-10 mt-4">
                A propos de<br/>
                <span
                    className="text-5xl md:text-[6rem] font-gotham font-bold text-center mt-1 text-pinkSmart leading-none">
                    Eath
                </span>
            </h1>
            < div className={`text-black text-md md:text-xl font-gotham font-bold  text-center w-full  mt-4`}>Eath est
                une application mobile moderne très sophistiquée <br/> qui garantit la sécurité alimentaire des
                consommateurs
                à l'échelle mondiale.<br/> C'est un outil de détection dans l'aliment de la conformité HALAL,<br/> des
                allergènes, des substances nocives comme drogue, poison, poison etc
            </div>
            <motion.div
                className="w-96 h-96 bg-pinkSmart hidden lg:block left-0  z-1 absolute rounded-full"

                transition={{
                    duration: 4,

                    ease: 'linear',
                }}
            >
            </motion.div>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 `}>

                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`p-4`}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: index * 0.2}}
                    >
                        <CardGradient title={item.title} text={item.text}/>
                    </motion.div>
                ))}

            </div>
            <Pourquoinous/>
        </motion.div>

    )
        ;
};

export default About;