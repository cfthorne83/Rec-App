import React, {useState} from "react";

const defaultQuestion = {
    _id: null, 
    name: "", 
    content: "",
}

export const QuestionsForm = ({submitQuestion}) => {

    const [question, setQuestion] = useState(defaultQuestion);

    const handleSubmit = (e) => {
        e.preventDefault();
        const _id = Math.floor(Math.random * 1000);
        setQuestion({...question, _id: _id});
        submitQuestion(question);
        setQuestion(defaultQuestion);
    };

    const handleInput = (e) => {
        setQuestion({...question, name: e.target.value })
    };

    const handleText = (e) => {
        setQuestion({...question, content: e.target.value})
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Submit a Question:</h1>
                <input 
                    value={question.name}
                    type='text' 
                    placeholder="Enter Question Name"
                    onChange={handleInput}>
                </input>
                <textarea
                    onChange={handleText} 
                    value={question.content}
                    rows="5"
                    placeholder="Ask Away..."
                    >
                </textarea>
                <button>Submit</button>
            </form>
        </>
    )
}