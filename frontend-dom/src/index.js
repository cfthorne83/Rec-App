const render = () => {

    let questions = [
            { _id: 1, name: 'Vladimir Harkonnen', content: 'Am I the drama?' },
            { _id: 2, name: 'Lady Jessica', content: 'Is Paul the Kwisatz Haderach?' },
            { _id: 3, name: 'Paul Atreides', content: 'Why are my dreams so sandy?' },
        ];

    const root = document.getElementById('root');
    const App = document.createElement('div');
    root.append(App);

    const h1 = document.createElement('h1');
    h1.innerText = "Ask a Question...";
    
    const form = document.createElement('form');
    const input = document.createElement('input');
    input.placeholder = " Question Name";
    const textArea = document.createElement('textarea');
    textArea.rows = 3;
    textArea.placeholder = "Ask a Question...";
    const button = document.createElement('button');
    button.innerText = "Submit";

    const questionList = document.createElement('ul');
    
    App.append(h1);
    App.append(form);
    form.append(input);
    form.append(textArea);
    form.append(button);
    App.append(questionList);

    const generateQuestionsList = () => {
        // if (!questions.length) return questionList.innerHTML = "No Questions"
        
        questions.forEach( question => {
            const name = document.createElement('h2');
            name.innerText = question.name;
            App.append(name);

            const content = document.createElement('li');
            content.innerText = question.content;
            App.append(content)
        })
    }

    generateQuestionsList();
}
document.addEventListener('DOMContentLoaded', render());