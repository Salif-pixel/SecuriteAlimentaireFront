
import PropTypes from "prop-types";

const teamMembers = [
    {
        img: "https://cdn.easyfrontend.com/pictures/users/userL1.jpg",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/users/userL20.jpg",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/users/userL2.jpg",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/users/userL25.jpg",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/users/userL3.jpg",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/users/userL17.jpg",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/users/userL4.jpg",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/users/userL26.jpg",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/users/userL11.jpg",
    },
];

const TeamMemberItem = ({ member }:any) => (
    <img src={member.img} alt="" className="mx-auto w-full rounded-md" />
);

TeamMemberItem.propTypes = {
    member: PropTypes.object.isRequired,
};

export const TeamG = () => {
    return (
        <section className="ezy__team19 light py-14 md:py-24 bg-white text-zinc-900  overflow-hidden">
            <div className="px-4 mx-auto text-center">
                <div className="grid grid-cols-6 gap-4 align-items-end">
                    <div className="col-span-6 lg:col-span-3 lg:order-3 flex items-center">
                        <div className="text-start lg:p-6 lg:pr-12">
                            <h1 className="text-3xl leading-tight md:text-[45px] font-bold">
                                Air gathering make wherein sixth moved
                            </h1>
                            <p className="opacity-80 lg:pr-12 my-6">
                                Was multiply divided made fruitful blessed moving there his
                                yielding likeness. They're lesser moveth abundantly appear life
                                image male seed.
                            </p>
                            <button className="py-3 px-7 rounded bg-blue-600 text-white hover:bg-opacity-90 duration-300">
                                Become an instructor
                            </button>
                        </div>
                    </div>

                    {teamMembers.map((member, i) => (
                        <div
                            className="col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-1"
                            key={i}
                        >
                            <TeamMemberItem member={member} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

