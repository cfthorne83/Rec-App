import React from "react";

export const QuestionsForm = () => {
    return (
        <>
            <h1>Submit a Question:</h1>
            <input type='text' placeholder="Enter Question Name"></input>
            <textarea rows="5"></textarea>
            <button>Submit</button>
        </>
    )
}