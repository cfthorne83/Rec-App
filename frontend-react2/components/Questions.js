import React from "react";

export const Questions = ({questions}) => {

    const questionList = questions.map(question => {
        return(
            <ul key={question._id}>
                <li>{question.name}</li>
                <li>{question.content}</li>
            </ul>
        )   
    });
    
    return (
        <>
            <h1>Questions</h1>
            {questionList}
        </>
    )
};