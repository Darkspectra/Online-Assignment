import Swal from 'sweetalert2'

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const TakeAssignment = () => {

    const assignments = useLoaderData();
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);
    const { id } = useParams();

    const assignment = assignments.find(card => card._id == id)

    const handleTakeAssignment = event => {
        event.preventDefault();
        const form = event.target;

        const text = form.text.value;
        const pdf = form.pdf.value;
        const email = user.email;
        const name = email.split("@")[0];
        const title = assignment.title;
        const image = assignment.image;
        const marks = assignment.marks;
        const status = "pending";
        const obtainMarks = "";
        const feedBack = "";

        const newSubmission = { email, text, pdf, id, title, image, marks, status, name, obtainMarks, feedBack  };
        console.log(newSubmission);

        fetch("https://my-assignment-server-five.vercel.app/submission", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newSubmission)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Submitted Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate(location?.state ? location.state : '/')
                }
            })


    }



    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Take Assignment</h2>
            <form onSubmit={handleTakeAssignment}>
                <div className="md:flex mb-8">
                    <div className="md:w-1/2">
                        <p className="text-2xl">Text Area</p>
                        <input className="input input-bordered w-full" name="text" placeholder="Text Area" />
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <p className="text-2xl">PDF Link</p>
                        <input className="input input-bordered w-full" name="pdf" placeholder="PDF Link" />
                    </div>
                </div>
                <input type="submit" value="Submit Assignment" className="btn btn-block text-white bg-slate-500" />
            </form>
        </div>
    );
};

export default TakeAssignment;