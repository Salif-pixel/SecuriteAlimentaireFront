"use client";

import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom";





export function     SparklesPreview() {
    const navigate= useNavigate();
    return (
        <motion.div  initial={{x:50,}} className=" z-50  w-full h-screen bg-transparent flex flex-col items-center md:items-start justify-start  rounded-md">
            <motion.div initial={{x: 30,}}
                        className={`flex flex-col items-center justify-center`}>
                <div className={`flex md:flex-row font-mono flex-col md:justify-evenly`}>
                    <h1 className="md:text-7xl mr-2  text-5xl  font-gotham font-bold  text-center text-blueSmart relative z-50">
                        Sécurité
                    </h1>
                    <span
                        className="md:text-7xl  text-5xl  font-gotham font-bold  text-center text-blueSmart relative z-50"> Alimentaire</span>
                </div>

                <div className="w-[40rem] relative">

                    <div
                        className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blueSmart to-transparent h-[2px] w-3/4 blur-sm"/>
                    <div
                        className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blueSmart to-transparent h-px w-3/4"/>
                    <div
                        className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/4 blur-sm"/>
                    <div
                        className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/4"/>


                </div>
                < div className={`text-black text-md md:text-2xl font-gotham font-bold  text-center w-full  mt-4`}>Revolutionnons <br/>la sécurité alimentaire dans le monde .
                </div>


                <div className={`md:w-fit flex flex-col md:flex-row mt-4 z-50  `}>
                    <button onClick={()=>navigate("/auth/login")}
                        className="inline-flex h-12 font-gotham font-bold   ml-64 mr-60 mb-4 md:mb-0 md:ml-0 md:mr-4   animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6  text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Se connecter
                    </button>
                    <button onClick={()=>navigate("/auth/register")}
                        className="  ml-64 mr-60 md:ml-0 md:mr-0 font-gotham font-bold  shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-blueSmart rounded-md text-white transition duration-200 ease-linear">
                       S'inscrire
                    </button>

                </div>

            </motion.div>
            {/*<div className={`absolute bottom-0`}><InfiniteMovingCardsDemo/></div>*/}

        </motion.div>
    );
}