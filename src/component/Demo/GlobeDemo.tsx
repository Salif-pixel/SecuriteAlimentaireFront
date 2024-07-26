
import Spline from '@splinetool/react-spline';

export default function GlobeDemo() {
    return (
        <div>
            <h1 className="text-3xl md:text-[3.5rem] font-gotham font-bold  text-center text-blueSmart mb-10 mt-8">Notre
                application
                garantit<br/>

                <span

                    className="text-4xl md:text-[6rem] font-gotham font-bold  text-center  mt-1 text-blueSmart leading-none">
               la sécurité .
              </span>
            </h1>
            <Spline scene="https://prod.spline.design/rAkUfdFt4Nb1G9iI/scene.splinecode"/>
        </div>
    );
}