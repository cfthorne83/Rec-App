// import mongoose from 'mongoose';

// const Schema = mongoose.Schema;

// const QuestionSchema = Schema({
//     name: {
//         type: String, 
//         required: true,
//     },
//     content: {
//         type: String, 
//         required: true,
//     },
// }, {
//     timestamps: true
// });

// export const Question = mongoose.model('Question', QuestionSchema);



// models/question.js
    import mongoose from 'mongoose';
    const Schema = mongoose.Schema;

    // create a `mongoose` schema by invoking the `Schema` function with an object with keys representing the items that make up a `Question` and values which are also objects defining the data type of the item and whether or not the item itself is required. 
    // you may also pass an optional options object, here i've turned on `timestamps`. 
    const QuestionSchema = Schema({
        name: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
    }, {
        timestamps: true,
    });
    
    // finally pass the return value of the `Schema` function (set to `QuestionSchema`) and pass it to the `model` creator function given to us by mongoose along with a string that represents the name of the entity we are modeling, in this case a `Question`.
    export const Question = mongoose.model('Question', QuestionSchema);
