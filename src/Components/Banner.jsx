import bg1 from "../assets/logo.jpg"

const Banner = () => {
    return (
        <div className="flex max-w-7xl mx-auto items-center border-8">
            <div>
                <img className="rounded-2xl" src={bg1} alt="" />
            </div>
            <div >
                <p className="ml-24 text-6xl font-bold my-7">An Efficient way <br /> to check Assignment</p>
            </div>
        </div>
    );
};

export default Banner;