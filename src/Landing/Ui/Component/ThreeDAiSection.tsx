import {motion} from "framer-motion";

import {ServiceAi} from "./ServiceAi.tsx";
import Spline from "@splinetool/react-spline";


export function ThreeDAiSection(){
    return (
        <motion.div
            className={` w-screen  relative  bg-white  pt-4`}>

            {/*<motion.h1 initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}}*/}
            {/*           transition={{type: "spring", stiffness: 100, damping: 25}}*/}
            {/*           className="text-2xl md:text-[3.5rem] font-gotham  font-bold absolute  left-0 right-0 text-center text-purpleSmart mb-10 ">*/}
            {/*    L'intelligence <br/>*/}
            {/*    <span*/}
            {/*        className="text-3xl md:text-[5rem] font-gotham font-bold  text-center z-50  mt-1 text-purpleSmart leading-none">*/}
            {/*                     Artificielle*/}
            {/*                   </span>*/}
            {/*</motion.h1>*/}
            <Spline scene="https://prod.spline.design/Ahro4ttIrfaOqMT7/scene.splinecode" />


            <ServiceAi/>
        </motion.div>
    );

}