"use client";


import {GetInTouchSimple} from "../../Landing/Ui/Component/GetInTouchSimple.tsx";
import {motion} from "framer-motion";


export function PlaceholdersAndVanishInputDemo() {

    return (
        <motion.div initial={{opacity: 0, y: 200}} whileInView={{opacity: 1, y: 0}}
                    transition={{type: "spring", stiffness: 100, damping: 25}} id={`Contact`}
                    className="h-screen flex flex-col  justify-center  items-center px-4">
            <motion.div
                className="w-72 h-72 bg-redSmart left-0 hidden lg:block  z-1 absolute rounded-full"

                transition={{
                    duration: 4,

                    ease: 'linear',
                }}
            >
            </motion.div>
            <h1 className="text-3xl md:text-[4.5rem] font-gotham font-bold   text-center  text-redSmart mb-10 mt-4">
                Contactez <br/>
                <span
                    className="text-4xl md:text-[6rem] font-gotham font-bold   text-center  mt-1 text-redSmart leading-none">
                     nous
                    </span>
            </h1>
            <GetInTouchSimple/>
            <motion.div
                className="w-48 h-48 bg-redSmart right-0 hidden lg:block   z-1 absolute rounded-full"

                transition={{
                    duration: 4,

                    ease: 'linear',
                }}
            >
            </motion.div>


        </motion.div>
    );
}
