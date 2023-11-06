import { Link, useLoaderData, useParams } from "react-router-dom";


const AssignmentDetails = () => {
    const assignmentDetails = useLoaderData();

    const { id } = useParams();
    const card = assignmentDetails.find(card => card._id == id)

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={card.image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{card.title}</h1>
                        <p className="py-6">{card.description}</p>
                        <Link to={`takeAssignment/${id}`}>
                            <button className="btn btn-primary text-white">Take Assignment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;