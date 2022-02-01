import React, {useEffect} from "react";
import { connect } from "react-redux";
import { deleteQuestion, fetchQuestions } from "../actions/questions_actions";

const Questions = ({deleteQuestion, fetchQuestions, questions}) => {
    useEffect(() => {
        fetchQuestions();
    }, [fetchQuestions])

    const generateQuestionList = () => {
        if (!questions.length) return <div>No Questions...</div>

        return questions.map( q => 
                <ul key={q._id} className="module">
                    <h2>{q.name}</h2>
                    <li>{q.content}</li>
                    <button 
                        onClick={() => deleteQuestion(q._id)}
                    >
                        Delete
                    </button>
                </ul> 
        )
    };

    return (
        <>
            {generateQuestionList()}        
        </>
    )
};

const mstp = (state, ownProps) => ({
    questions: state.questions ? Object.values(state.questions) : [],
});

const mdtp = (dispatch, ownProps) => {
    return {
    fetchQuestions: () => dispatch(fetchQuestions()),
    deleteQuestion: _id => dispatch(deleteQuestion(_id)),
}}

export default connect(mstp, mdtp)(Questions);