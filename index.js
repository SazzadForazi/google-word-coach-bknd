const express = require('express');
// const { MongoClient } = require('mongodb');
const cors = require('cors');
// const ObjectId = require('mongodb').ObjectId;
const app = express();
const port = 5000;

app.use(cors());
// app.use(express.json());

//user:question-bank
//pass: syN02llc0WlKpP1j

// const uri = "mongodb+srv://question-bank:syN02llc0WlKpP1j@cluster0.qimng.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// async function run() {
//     try {
//         await client.connect();

//     } finally {
//         // await client.close();
//     }
// }
// run().catch(console.dir);

app.get('/question', (req, res) => {
    res.send({

        quiz: [
            {
                id: 0,
                question: "Where were the IAAF World Indoor Championships first held?",
                choices: ["Paris", " Amsterdam"],
                answer: "Paris"
            },
            {
                id: 1,
                question: "what is the capital city of Kenya?",
                choices: ["Nairobi", "Kisumu"],
                answer: "Nairobi"
            },
            {
                id: 2,
                question: "Who what the first president of Kenya?",
                choices: ["Jomo Kenyatta", "Daniel Moi"],
                answer: "Jomo Kenyatta"
            },
            {
                id: 3,
                question: "what is the name of a female dog?",
                choices: ["Bitch", "Cunt"],
                answer: "Bitch"
            },
            {
                id: 4,
                question: "A game called ” Mokshapat” was created by the 13th century poet saint Gyandev, It is the original version of which of the following games of today?",
                choices: ["Ludo", "Snakes & Ladders"],
                answer: "Snakes & Ladders"
            },
            {
                id: 5,
                question: "Rovers Cup is related to which of the following sports?",
                choices: ["Tennis", "Football"],
                answer: "Football"
            },
            {
                id: 6,
                question: "What election year did president Trump lose to Biden?",
                choices: [2020, 2014],
                answer: "2020"
            }
        ],
        score: 0,
        currentQuestionIndex: 0
    })
})
app.get('/question/:id', (req, res) => {
    // console.log(req.params.id);
    const getId = req.params.id;
    const answer = quiz.id[getId]
    console.log(answer);
    // res.send(answer);
})
app.get('/', (req, res) => {
    res.send("data Server has been Connected")
});
app.listen(port, () => {
    console.log("Running Server on Port", port);
})