import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import MyAssignmentTable from "./MyAssignmentTable";


const MyAssignment = () => {
    const Assignment = useLoaderData();

    const { user } = useContext(AuthContext);

    const userAssignment = Assignment.filter(card => card.email === user.email)


    return (
        <div>
            <h2 className="text-4xl font-bold mx-10 my-24 text-center">Number of Submitted Assignment: {userAssignment.length} </h2>
            <h2 className="text-4xl font-bold mx-10 my-24 text-center">User name: {user.email.split("@")[0]} </h2>
            <div className="">
                {

                    userAssignment.map(assignment => <MyAssignmentTable key={assignment._id} assignment={assignment}></MyAssignmentTable>)

                }
            </div>
        </div>
    );
};

export default MyAssignment;