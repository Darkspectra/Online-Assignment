import { Link } from "react-router-dom";

const AssignmentCard = ({ assignment }) => {

    const { title, marks, difficulty, image, _id } = assignment;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="assignment" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <div className="text-3xl font-semibold">
                            <h2 className="bg-yellow-300 font-bold">{name}</h2>
                            <h2> Title: {title}</h2>
                            <h2 > Marks: {marks}</h2>
                            <h2> Difficulty: {difficulty}</h2>
                        </div>
                        <Link to={`details/${_id}`}>
                            <button className="btn bg-blue-400 text-white font-semibold">View Assignment</button>
                        </Link>
                        <Link to={`updateAssignment/${_id}`}>
                            <button className="btn bg-blue-400 text-white font-semibold">Update Assignment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;