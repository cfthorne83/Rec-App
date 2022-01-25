import React from "react";

export const Questions = ({GLOBAL_STATE, deleteQuestion}) => {

    const questions = Object.values(GLOBAL_STATE.questions);

    const generateQuestionList = () => {
        if (!questions.length) return <div>No Questions...</div>

        return questions.map( q => 
                <ul key={q._id} className="module">
                    <h2>{q.name}</h2>
                    <li>{q.content}</li>
                    <button onClick={() => deleteQuestion(q._id)}>Delete</button>
                </ul> 
        )
    };

    return (
        <>
            {generateQuestionList()}        
        </>
    )
};