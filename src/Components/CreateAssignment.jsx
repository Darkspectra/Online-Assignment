import Swal from 'sweetalert2'

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const CreateAssignment = () => {

    const { user } = useContext(AuthContext);

    const handleAddAssignment = event => {
        event.preventDefault();
        const form = event.target;

        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const image = form.image.value;
        const difficulty = form.difficulty.value;
        const date = form.date.value;
        const email = user.email;
        const newAssignment = { title, description, marks, image, difficulty, date, email };
        console.log(newAssignment);

        fetch("http://localhost:5000/assignment", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Created Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Create Assignment</h2>
            <form onSubmit={handleAddAssignment}>
                <div className="">
                    <div className="md:w-full">
                        <p className="text-2xl">Image</p>
                        <input className="input input-bordered w-full" name="image" placeholder="Image URL" />
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="md:w-1/2">
                        <p className="text-2xl">Title</p>
                        <input className="input input-bordered w-full" name="title" placeholder="Title" />
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <p className="text-2xl">Description</p>
                        <input className="input input-bordered w-full" name="description" placeholder="Description" />
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="md:w-1/2">
                        <p className="text-2xl">Marks</p>
                        <input className="input input-bordered w-full" name="marks" placeholder="Marks" />
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <p className="text-2xl">Date</p>
                        <input type="date" name="date" className="input input-bordered text-center" />
                    </div>

                </div>
                <div className="w-full">
                    <p className="text-2xl">Difficulty</p>
                    <select name="difficulty" id="">
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>

                <input type="submit" value="Create Assignment" className="btn btn-block text-white bg-slate-500" />
            </form>
        </div>
    );
};

export default CreateAssignment;