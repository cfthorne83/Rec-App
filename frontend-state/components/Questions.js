import React from "react";

export const Questions = ({questions, deleteQuestion}) => {

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