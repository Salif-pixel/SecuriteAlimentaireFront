

import food from "../../../assets/food.png"




const HeroHeaderShape = () => (
    <svg
        className="absolute right-0 top-0 hidden lg:block text-gray-50 -z-10"
        width="686"
        height="630"
        viewBox="0 0 686 630"
        fill="#0097D7"
        xmlns="http://www.w3.org/2000/svg"
    >
        <ellipse
            cx="863.5"
            cy="331.894"
            rx="403.5"
            ry="317.98"
            fill="#0097D7"
        />
    </svg>
);

export const Accueil = () => {
    return (
        <div className=" light  bg-white  text-blueSmart relative z-10 ">

            <HeroHeaderShape />
            <div className="container px-4 mx-auto relative">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-6 xl:col-span-5 xl:pr-12 text-center lg:text-start">
                        <div className="flex flex-col justify-center h-full">
                            <h2 className="text-3xl font-bold md:text-[70px] leading-none mb-6">
                               Sécurité alimentaire
                            </h2>
                            <p className="text-[22px] leading-normal opacity-80">
                                Revolutionnons la sécurité alimentaire dans le monde  avec Eath
                            </p>

                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 xl:col-span-5 text-center lg:text-start">
                        <img
                            src={food}
                            alt=""
                            className="rounded max-w-full h-full mt-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

