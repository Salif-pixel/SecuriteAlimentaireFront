import {motion} from "framer-motion";
import {StickyScrollRevealDemo} from "../../../component/Demo/StickyScrollRevealDemo.tsx";



export function Solution(){
    return (
        <motion.div initial={{opacity: 0,}} whileInView={{opacity: 1,}}
                    transition={{type: "spring", stiffness: 100, damping: 25}} className={`relative h-fit`}>

            <h1 className="text-3xl md:text-[3.5rem] font-gotham font-bold z-50 text-center text-blueSmart mb-10 mt-4">
                Voici les <br/>
                <span
                    className="text-4xl md:text-[6rem] font-gotham font-bold  text-center  mt-1 text-blueSmart leading-none">
                                  solutions
                               </span>
            </h1>
            <StickyScrollRevealDemo/>


        </motion.div>

    );
}