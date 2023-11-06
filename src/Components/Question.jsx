

const Question = () => {
    return (
        <div className="mb-20">
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    What is Online Assignment ?
                </div>
                <div className="collapse-content">
                    <p>An online assignment refers to a task or piece of work that is given to students or individuals to complete through digital platforms, typically over the internet.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Assignment Accessibility
                </div>
                <div className="collapse-content">
                    <p>Since they are hosted online, students can access the assignment from anywhere with an internet connection</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Is this secure ?
                </div>
                <div className="collapse-content">
                    <p>Every user has their own assignment submission list. Therefore, there is no chance that the data can be leaked by other user.</p>
                </div>
            </div>
        </div>
    );
};

export default Question;