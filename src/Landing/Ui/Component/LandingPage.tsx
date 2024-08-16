

import Probleme from "./Probleme.tsx";
import {Solution} from "./Solution.tsx";
import {ThreeDAiSection} from "./ThreeDAiSection.tsx";
import iPhone12 from "../../../assets/iPhone-12-Mockup.png";
import samsung  from "../../../assets/samsung.png";
import eath from "../../../assets/Eath.mp4";
import accueil from  "../../../assets/Accueil.mp4";
import wave from "../../../assets/wave.png";
import authentification from "../../../assets/Authentification.mp4";
import GlobeDemo from "../../../component/Demo/GlobeDemo.tsx";
import { motion } from "framer-motion";
import { LinkApp } from "./LinkApp.tsx";



// function ShapeOne() {
//     return (
//         <svg
//             className="absolute =-bottom-[20%] left-0"
//             width="405"
//             height="626"
//             viewBox="0 0 405 626"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//         >
//             <rect
//                 x="-302.65"
//                 y="296.986"
//                 width="433.92"
//                 height="140"
//                 rx="73.8464"
//                 transform="rotate(-33.796 -302.65 296.986)"
//                 fill="#ADD8E6"
//
//             />
//             <rect
//                 x="-315"
//                 y="502.403"
//                 width="666.584"
//                 height="140"
//                 rx="73.8464"
//                 transform="rotate(-33.796 -315 502.403)"
//                 fill="#0097D7"
//
//             />
//         </svg>
//     );
// }

export function LandingPage (){

    return (

        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, y: 0}}
                    transition={{type: "spring", stiffness: 50, damping: 10,}}
                    className={`min-h-screen w-screen overflow-hidden`}>

            <div className="video-container ">
                <video
                    className="w-full h-auto"
                    autoPlay
                    muted
                    loop
                    controls={false}
                style={{pointerEvents: 'none'}}

                >
                    <source src={accueil} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <Probleme/>
            <img src={wave} alt="wave" className="w-full h-auto"/>
            <Solution/>
            <ThreeDAiSection/>
            <div className="max-w-7xl mx-auto flex px-5 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
                    <h1 className="mb-5 sm:text-6xl  text-purpleSmart text-5xl font-bold font-gotham items-center Avenir xl:w-2/2 ">
                        Avec Eath,
                    </h1>
                    <p className="mb-4 xl:w-3/4 text-greenSmart font-bold font-gotham  text-lg">
                        profitez d'une expérience multiplateforme exceptionnelle sur Android, iPhone et bien plus
                        encore.
                    </p>

                </div>
                <div
                    className="xl:mr-44 sm:mr-0 flex flex-row max-h-[calc(100vh-15vh)]   sm:mb-28  mb-0 lg:mb-0 mr-48 md:pl-10">
                    <img
                        className="w-40 lg:w-80 md:ml-1 "
                        alt="iPhone-12"
                        src={iPhone12}
                    ></img>
                    <img
                        className="w-40 lg:w-80   md:ml-1 "
                        alt="iPhone-12"
                        src={samsung}
                    ></img>
                </div>
            </div>
            <h1 className="text-4xl md:text-[4rem] text-center font-semibold text-purpleSmart mb-10 mt-4">
                Accédez à votre espace personnel <br/>
                <span className="text-4xl md:text-[6rem] text-center font-bold mt-1 text-greenSmart leading-none">
        avec une sécurité renforcée.
    </span>
            </h1>


            <div className="video-container relative">
                <video

                    className="w-full h-auto"
                    autoPlay
                    muted
                    loop
                    controls={false}
                    style={{pointerEvents: 'none'}}
                >
                    <source src={authentification} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <h1 className="text-4xl md:text-[4rem]   text-center font-semibold text-purpleSmart mb-10 mt-4">
                Explorez notre contenu <br/>
                <span
                    className="text-4xl md:text-[6rem] text-center font-bold mt-1 text-greenSmart leading-none">
                                   à travers ces pages fascinantes.
                               </span>
            </h1>
            <div className="video-container relative">
                <video
                    className="w-full h-auto"
                    autoPlay
                    muted
                    loop
                    controls={false}
                    style={{pointerEvents: 'none'}}
                >
                    <source src={eath} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <GlobeDemo/>
            <LinkApp/>


            {/*{loading && <MultiStepLoaderDemo loading={loading} setLoading={setLoading}/>}*/}
        </motion.div>
    )

}
