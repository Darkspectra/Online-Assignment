

const MyAssignmentTable = ({ assignment }) => {
    const { name, title, obtainMarks, feedBack, status, image, marks } = assignment

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-col">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="flex items-center gap-48">
                    <h1 className="text-5xl ml-48 font-bold">{title}</h1>
                    <div>
                        <h1 className="text-2xl mt-10"> <span className="font-bold">Feedback: </span>{feedBack}</h1>
                        <h1 className="text-2xl"> <span className="font-bold">Marks: </span>{marks}</h1>
                        <h1 className="text-2xl mb-10"> <span className="font-bold">Obtained Marks: </span>{obtainMarks}</h1>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">{status}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAssignmentTable;