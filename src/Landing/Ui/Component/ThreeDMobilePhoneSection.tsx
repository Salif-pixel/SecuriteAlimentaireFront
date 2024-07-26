import {motion} from "framer-motion";
import ThreeDPhone from "./3DPhone.tsx";

export function ThreeDMobilePhoneSection (){
    return (

        <motion.div className={`z-50`} initial={{opacity: 0}} whileInView={{opacity: 1,}}
                    transition={{type: "spring", stiffness: 100, damping: 25}}>

            <motion.div initial={{opacity: 0, y: 200}} whileInView={{opacity: 1, y: 0}}

                        transition={{type: "spring", stiffness: 100, damping: 25}}

                        className={` w-screen h-fit  relative  z-50 `}>

                <motion.h1 className="text-3xl md:text-[3.5rem] font-gotham font-bold  text-center text-blueSmart mb-10 mt-8">

                    Application <br/>

                    <span

                        className="text-4xl md:text-[6rem] font-gotham font-bold  text-center  mt-1 text-blueSmart leading-none">
                mobile
              </span>
                </motion.h1>
                <ThreeDPhone/>
                <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: -300}}
                            transition={{type: "spring", stiffness: 100, damping: 25}}
                            className={`w-1/2 flex flex-row`}></motion.div>

            </motion.div>
        </motion.div>
    );

}