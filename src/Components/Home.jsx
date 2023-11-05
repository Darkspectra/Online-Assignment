

import Banner from "./Banner";
import AssignFooter from "./AssignFooter";
import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";

const Home = () => {
    const assignments = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-4xl font-bold mx-10 my-24 text-center">Total Assignments: {assignments.length}</h2>
            <div className="mx-10 grid grid-cols-3 gap-10">
                {
                    assignments.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>)
                }
            </div>
            <AssignFooter></AssignFooter>
        </div>
    );
};

export default Home;