
import img1 from "../assets/Assignment-Writing.jpg"

const AnotherComponent = () => {
    return (
        <div className="flex items-center ml-28 mb-10">
            <div>
                <h2 className="text-5xl font-bold">Home Tutor for Helping <br /> to Solve Assignment</h2>
            </div>
            <div className="ml-28">
                <img src={img1} alt="" />
            </div>
        </div>
    );
};

export default AnotherComponent;