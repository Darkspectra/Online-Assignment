

import Banner from "./Banner";
import AssignFooter from "./AssignFooter";
import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import { useState } from "react";
import Question from "./Question";
import AnotherComponent from "./AnotherComponent";

const Home = () => {
    const [itemPerPage, setItemPerPage] = useState("");
    const assignments = useLoaderData();

    const assignmetFilter = assignments.filter(card => card.difficulty == itemPerPage)




    const handleFilter = event => {
        event.preventDefault();
        const form = event.target;
        const difficulty = form.difficulty.value;
        setItemPerPage(difficulty)

    }

    return (
        <div>
            <Banner></Banner>
            <div className="items-center ml-28">
                <form onSubmit={handleFilter}>
                    <div className="w-full">
                        <select className="border-8" name="difficulty" id="">
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                    <input type="submit" value="Filter" className="btn text-white bg-slate-500" />
                </form>
            </div>
            <h2 className="text-4xl font-bold mx-10 my-24 text-center">Total Assignments: {assignments.length}</h2>
            <div className="mx-10 grid grid-cols-3 gap-10">
                {
                    itemPerPage ?
                    assignmetFilter.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>)
                    :
                    assignments.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>)

                }
            </div>
            <h2 className="text-4xl font-bold mx-10 my-24 text-center">FAQ</h2>
            <Question></Question>
            <AnotherComponent></AnotherComponent>
            <AssignFooter></AssignFooter>
        </div>
    );
};

export default Home;