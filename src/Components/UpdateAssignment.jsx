import Swal from 'sweetalert2'

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from 'react-router-dom';


const UpdateAssignment = () => {

    const assignments = useLoaderData()
    const { title, marks, difficulty, image, _id, description, date, email } = assignments;

    const { user } = useContext(AuthContext);

    const handleUpdateAssignment = event => {
        event.preventDefault();
        const form = event.target;

        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const image = form.image.value;
        const difficulty = form.difficulty.value;
        const date = form.date.value;
        const newAssignment = { title, description, marks, image, difficulty, date };
        console.log(newAssignment);

        if(user.email === email){
            fetch(`http://localhost:5000/assignment/${_id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newAssignment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Assignment Updated Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
        }
        else{
            Swal.fire({
                title: 'Error!',
                text: 'Unauthorized User !!',
                icon: 'error',
                confirmButtonText: 'Exit'
            })
        }


    }








    const handleDelete = _Id => {
        console.log(_Id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed && user.email===email) {


                fetch(`http://localhost:5000/assignment/${_Id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                        }
                    })
            }
            else{
                Swal.fire({
                    title: 'Error!',
                    text: 'Unauthorized User !!',
                    icon: 'error',
                    confirmButtonText: 'Exit'
                })
            }
        })

    }













    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Update Assignment</h2>
            <form onSubmit={handleUpdateAssignment}>
                <div className="">
                    <div className="md:w-full">
                        <p className="text-2xl">Image</p>
                        <input className="input input-bordered w-full" defaultValue={image} name="image" placeholder="Image URL" />
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="md:w-1/2">
                        <p className="text-2xl">Title</p>
                        <input className="input input-bordered w-full" defaultValue={title} name="title" placeholder="Title" />
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <p className="text-2xl">Description</p>
                        <input className="input input-bordered w-full" defaultValue={description} name="description" placeholder="Description" />
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="md:w-1/2">
                        <p className="text-2xl">Marks</p>
                        <input className="input input-bordered w-full" defaultValue={marks} name="marks" placeholder="Marks" />
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <p className="text-2xl">Date</p>
                        <input type="date" defaultValue={date} name="date" className="input input-bordered text-center" />
                    </div>

                </div>
                <div className="w-full">
                    <p className="text-2xl">Difficulty</p>
                    <select defaultValue={difficulty} name="difficulty" id="">
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>

                <input type="submit" value="Update Assignment" className="btn btn-block text-white bg-slate-500" />
            </form>
            <button onClick={()=> handleDelete(_id)} className="btn bg-red-500 text-white">Delete</button>
        </div>
    );
};

export default UpdateAssignment;