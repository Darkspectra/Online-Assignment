import { useLoaderData } from "react-router-dom";
import SubmittedAssignmentCard from "./SubmittedAssignmentCard";


const SubmittedAssignment = () => {
    const submittedAssignments = useLoaderData()
    const pendingAssignment = submittedAssignments.filter(card => card.status === "pending")

    return (
        <div>
            <h2 className="text-4xl font-bold mx-10 my-24 text-center">Pending Assignment: {pendingAssignment.length}</h2>
            <div className="mx-10 grid grid-cols-3 gap-10">
                {

                    pendingAssignment.map(assignment => <SubmittedAssignmentCard key={assignment._id} assignment={assignment}></SubmittedAssignmentCard>)

                }
            </div>
        </div>
    );
};

export default SubmittedAssignment;