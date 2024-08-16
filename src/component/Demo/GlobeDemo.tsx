import planet from "../../assets/planet.mp4";



export default function GlobeDemo() {
    return (
        <div className={``}>
            <h1 className="text-3xl py-10 md:text-[3.5rem] font-gotham font-bold  text-center text-purpleSmart mb-10 mt-8">Notre
                application
                garantit<br/>

                <span

                    className="text-4xl md:text-[6rem] font-gotham font-bold  text-center  mt-1 text-greenSmart leading-none">
               la sécurité .
              </span>
            </h1>
            <div className="video-container relative">
                <video
                    className="w-full h-auto"
                    autoPlay
                    muted
                    loop

                >
                    <source src={planet} />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}