import React, {useState} from "react";
import { connect } from "react-redux";
import { submitQuestion } from "./actions/questions_actions";

const defaultQuestion = {
    _id: null,
    name: '',
    content: '',
};

const QuestionsForm = ({submitQuestion}) => {

    const [question, setQuestion] = useState(defaultQuestion);

    const handleSubmit = e => {
        e.preventDefault();
        question._id = Math.floor(Math.random() * 1000);
        submitQuestion(question);
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

const mdtp = (dispatch) => ({
    submitQuestion: question => dispatch(submitQuestion(question)),
})

export default connect(null, mdtp)(QuestionsForm);