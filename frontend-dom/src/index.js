const render = () => {

    let questions = [
            { _id: 1, name: 'Vladimir Harkonnen', content: 'Am I the drama?' },
            { _id: 2, name: 'Lady Jessica', content: 'Is Paul the Kwisatz Haderach?' },
            { _id: 3, name: 'Paul Atreides', content: 'Why are my dreams so sandy?' },
        ];

    const submitQuestion = (e) => {
        e.preventDefault();

        if (textArea.value === "") return textArea.placeholder = "Question Required...";
        const question = {
            _id: Math.floor(Math.random() * 1000),
            name: input.value.trim(), 
            content: input.value.trim(),
        }
        input.value = "";
        textArea.value = "";
        questionList.innerHTML = "";
        questions.push(question);
        generateQuestionsList();
    }
    
    const deleteQuestion = (_id) => {
        questionList.innerHTML = "";
        questions = questions.filter(question => question._id !== _id)
        generateQuestionsList();
    }

    const root = document.getElementById('root');
    const App = document.createElement('div');
    App.classList.add('App');
    root.append(App);

    const header = document.createElement('header');
    header.innerHTML = "RecApp2.0: Frontend DOM Manipulation";
    App.append(header);

    const h1 = document.createElement('h1');
    h1.innerText = "Ask a Question...";
    
    const form = document.createElement('form');
    form.classList.add('module');

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = "Question Name";
    input.name = 'name';

    const textArea = document.createElement('textarea');
    textArea.rows = 3;
    textArea.placeholder = "Ask a Question...";
    textArea.name = "content";
    textArea.type = "text";

    const submit = document.createElement('button');
    submit.innerText = "Submit";
    submit.type = "text";

    form.addEventListener('submit', e => {
        submitQuestion(e);
    })

    const questionList = document.createElement('ul');
    
    App.append(h1, form, questionList);
    form.append(input, textArea, submit);

    const generateQuestionsList = () => {
        if (!questions.length) return questionList.innerHTML = "No Questions"
        
        questions.forEach( question => {
            const formattedQuestion = document.createElement('div');
            const name = document.createElement('h3');
            name.innerText = question.name;
            formattedQuestion.append(name);

            const content = document.createElement('span');
            content.innerText = question.content;
            formattedQuestion.append(content);

            const deleteButt = document.createElement('button');
            deleteButt.innerText = "Delete";
            formattedQuestion.append(deleteButt);

            formattedQuestion.classList.add('module');

            questionList.append(formattedQuestion);

            deleteButt.addEventListener('click', e => {
                deleteQuestion(question._id);
            })

            questionList.append(deleteButt);
        })
    }

    generateQuestionsList();
}
document.addEventListener('DOMContentLoaded', render());