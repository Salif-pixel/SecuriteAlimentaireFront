
import {Accueil} from "./Accueil.tsx";
import Probleme from "./Probleme.tsx";
import {Solution} from "./Solution.tsx";
import {ThreeDAiSection} from "./ThreeDAiSection.tsx";
import {MacbookScrollDemo} from "../../../component/Demo/MacbookScrollDemo.tsx";
import {ThreeDMobilePhoneSection} from "./ThreeDMobilePhoneSection.tsx";
import GlobeDemo from "../../../component/Demo/GlobeDemo.tsx";
import { motion } from "framer-motion";
import { LinkApp } from "./LinkApp.tsx";

function ShapeOne() {
    return (
        <svg
            className="absolute =-bottom-[20%] left-0"
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
                fill="#ADD8E6"

            />
            <rect
                x="-315"
                y="502.403"
                width="666.584"
                height="140"
                rx="73.8464"
                transform="rotate(-33.796 -315 502.403)"
                fill="#0097D7"

            />
        </svg>
    );
}

export function LandingPage (){
    // const [loading, setLoading] = useState(true);
    return (

        <motion.div  initial={{opacity: 0}} whileInView={{opacity: 1, y: 0}}
                     transition={{type: "spring", stiffness: 50, damping: 10,}} className={`min-h-screen w-screen overflow-hidden`}>
            <ShapeOne/>
            <Accueil/>
            <Probleme/>
            <Solution/>
            <ThreeDAiSection/>
            <MacbookScrollDemo/>
            <ThreeDMobilePhoneSection/>
            <GlobeDemo/>
            <LinkApp/>


            {/*{loading && <MultiStepLoaderDemo loading={loading} setLoading={setLoading}/>}*/}
        </motion.div>
    )

}
