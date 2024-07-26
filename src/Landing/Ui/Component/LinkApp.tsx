
import logo from "../../../assets/logo.png";
export const LinkApp = () => {
    return (
        <div
            className="ezy__header16 light pt-20 md:pt-36 text-white bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage: `url(${logo})`,

            }}
        >
            <div
                className="absolute top-0 left-0 right-0 bottom-0 opacity-80"
                style={{
                    backgroundImage: "linear-gradient(145deg, #9013fe 0%, #101a8e 100%)",
                }}
            />

            <div className="container px-4 mx-auto relative">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 text-center">
                        <h2 className="text-3xl leading-none md:text-[70px] font-bold mb-6">
                            Disponible sur toutes les plateformes
                        </h2>
                        <p className="text-[22px] leading-normal opacity-80 lg:px-24 xl:px-64">
                            Notre application mobile de sécurité alimentaire est maintenant accessible sur l'App Store et le Google Play Store. Que vous soyez utilisateur d’iOS ou d’Android, vous pouvez profiter de notre technologie avancée pour scanner et vérifier la sécurité des aliments, où que vous soyez. Téléchargez-la dès aujourd’hui pour une alimentation plus sûre et plus consciente !"
                        </p>

                        <div className="flex items-center justify-center mt-12">
                            <a href="#!" className="shadow m-1">
                                <img
                                    src="https://cdn.easyfrontend.com/pictures/hero/play-app-android.png"
                                    alt=""
                                />
                            </a>
                            <a href="#!" className="shadow m-1">
                                <img
                                    src="https://cdn.easyfrontend.com/pictures/hero/play-app-apple.png"
                                    alt=""
                                />
                            </a>
                        </div>

                    </div>
                    <div className="col-span-12 lg:col-span-10 lg:col-start-2">
                        <div className="relative h-0 pt-[56.25%] rounded-t-[20px] overflow-hidden bg-white">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

