
import PropTypes from "prop-types";

const contents = [
    {
        title: "Sécurité Alimentaire",
        text: "Grâce à notre analyse précise, vous pouvez consommer vos repas en toute sécurité.",
    },
    {
        title: "Conformité et Respect",
        text: " Répondre aux exigences alimentaires spécifiques telles que les normes Halal.",
    },
    {
        title: "Prévention des Allergies",
        text: " Évitez les réactions allergiques grâce à la détection des allergènes.",
    },
    {
        title: "Santé et Bien-être",
        text: " Comprenez les apports nutritionnels de vos repas et faites des choix alimentaires sains.",
    },
];

const ContentItem = ({ item, index }:any) => (
    <div className="p-4 lg:p-6 text-center">
        <div className="text-lg font-bold flex justify-center items-center">
			<span className="w-12 h-12 bg-orangeSmart text-white flex justify-center items-center rounded-full mb-4">
				{index}
			</span>
        </div>
        <h5 className="text-xl font-bold mb-4">{item.title}</h5>
        <p className="opacity-80 mb-0">{item.text}</p>
    </div>
);

ContentItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

const Pourquoinous = () => {
    return (
        <section className="ezy__howitworks4 light pb-14 md:pb-24 bg-white  text-zinc-900 ">
            <div className="bg-orangeSmart py-14 md:py-24">
                <div className="container px-4 mx-auto">
                    <div className="flex justify-center">
                        <div className="max-w-xl text-white text-center">
                            <h1 className="text-3xl md:text-[45px] lg:text-[55px] font-bold leading-snug mb-4">
                               Pourquoi choisir Eath?
                            </h1>
                            <p className="text-[17px] leading-normal opacity-80">
                                Eath est une application mobile de sécurité alimentaire qui vous permet de scanner et vérifier la sécurité des aliments. Notre technologie avancée vous aide à prendre des décisions alimentaires plus sûres et plus conscientes. Téléchargez-la dès aujourd’hui pour une alimentation plus sûre et plus consciente !
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-4 gap-6 mt-12">
                    {contents.map((item, i) => (
                        <div className="col-span-4 md:col-span-2 lg:col-span-1" key={i}>
                            <ContentItem index={i + 1} item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Pourquoinous;
