import React from "react";

export const Questions = ({questions, deleteQuestion}) => {

    const generateQuestionList = () => {
        if (!questions.length) return <div>No Questions yet...</div>

        return questions.map( question => 
            <ul key={question._id}>
                <h2>{question.name}</h2>
                <li>{question.content}</li>
                <button onClick={() => deleteQuestion(question._id)}>Delete</button>
            </ul>
        )
    };


    
    return (
        <>
            <h1>Questions</h1>
            {/* {questionList} */}
            {generateQuestionList()}
        </>
    )
};