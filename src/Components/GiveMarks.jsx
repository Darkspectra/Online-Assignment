import Swal from 'sweetalert2'
import { useLoaderData, useNavigate } from "react-router-dom";

const GiveMarks = () => {

    const submittedAssignments = useLoaderData()
    const { pdf, text, obtainMarks, feedBack, _id, marks } = submittedAssignments;

    // const { user } = useContext(AuthContext);

    const navigate = useNavigate();



    const handleMarkAssignment = event => {
        event.preventDefault();
        const form = event.target;

        const obtainMarks = form.obtainMarks.value;
        const feedBack = form.feedBack.value;
        const status = "Completed";
        const newAssignment = { obtainMarks, feedBack, status };
        console.log(newAssignment);

            fetch(`https://my-assignment-server-five.vercel.app/submission/${_id}`, {
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
                            text: 'Assignment Evaluated Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        navigate(location?.state ? location.state : '/')
                    }
                })


    }


    return (
<div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold text-blue-500"><a href={pdf}>Submitted PDF</a></h2>
            <h2 className="text-3xl font-extrabold"><span className='text-red-300'>Written Description: </span>{text}</h2>

            <form onSubmit={handleMarkAssignment}>
                <div className="md:flex mb-8">
                    <div className="md:w-1/2">
                        <p className="text-2xl">Obtain Marks</p>
                        <input className="input input-bordered w-full" defaultValue={obtainMarks} name="obtainMarks" placeholder={marks} />
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <p className="text-2xl">Feed Back</p>
                        <input className="input input-bordered w-full" defaultValue={feedBack} name="feedBack" placeholder="Feed Back" />
                    </div>
                </div>

                <input type="submit" value="Give Mark" className="btn btn-block text-white bg-slate-500" />
            </form>
        </div>
    );
};

export default GiveMarks;