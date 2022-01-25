import React, {useState} from "react";

const defaultQuestion = {
    _id: null,
    name: '',
    content: '',
};

export const QuestionsForm = ({GLOBAL_STATE}) => {

    const [question, setQuestion] = useState(defaultQuestion);

    const handleSubmit = e => {
        e.preventDefault();
        question._id = Math.floor(Math.random() * 1000);
        GLOBAL_STATE.submitQuestion(question);
        setQuestion(defaultQuestion);
    };
    
    const handleInput = e => {
        setQuestion({...question, [e.target.name]: e.target.value})
    };

    return (
        <>
            <h1>Ask a Question...</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder="Enter Question Name"
                    name="name"
                    className="name"
                    value={question.name}
                    onChange={handleInput}
                    />
                <textarea
                    rows='5'
                    placeholder="Ask Away..."
                    name="content"
                    className="content"
                    value={question.content}
                    onChange={handleInput}
                />
                <button>Submit</button>
            </form>
        </>
    )
};