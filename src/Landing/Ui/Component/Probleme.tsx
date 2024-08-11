import {ContainerScroll} from "../../../component/ui/container-scroll-animation.tsx";
import {BentoGridDemo} from "../../../component/Demo/BentoGridDemo.tsx";
import {motion} from "framer-motion";


function Probleme() {
// const [loading, setLoading] = useState(true);


    return (


        <motion.div
                    className={`w-full font-gotham font-bold bg-greenSmart flex flex-col justify-center h-fit`}>
            <motion.div initial={{opacity: 0,y:200}} whileInView={{opacity: 1,y:0}}
                        transition={{type: "spring", stiffness: 100, damping: 25}} className={` hidden lg:block `}>
                <ContainerScroll titleComponent={
                    <>
                        <h1 className="text-4xl md:text-[4rem]   text-center font-semibold text-white mb-10 mt-4">
                            Les différents problèmes <br/>
                            <span
                                className="text-4xl md:text-[6rem] text-center font-bold mt-1 text-white leading-none">
                                   a résoudre
                               </span>
                        </h1>
                    </>
                }>
                    <BentoGridDemo/>
                </ContainerScroll>
            </motion.div>
            <div className={` lg:hidden w-full flex flex-col z-50`}>
                <h1 className="text-3xl md:text-[3.5rem] font-mono  text-center font-semibold text-white mb-10 mt-4">
                    Les différents problemes <br/>
                    <span
                        className="text-4xl md:text-[6rem] font-mono  text-center font-bold mt-1 text-white leading-none">
                                   a résoudre
                               </span>
                </h1>
                <BentoGridDemo/>
            </div>
        </motion.div>
    )
}

export default Probleme