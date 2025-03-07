import express from 'express'

const app = express();

// app.get('/' , (req,res) => {
//     res.send('Server is Running');
// });

const port = process.env.PORT || 3000;

app.get('/api/post',(req,res) =>{

    const posts = [{
        id:1,
        title:'1st post',
        content:'Why do programmers prefer dark mode? Because light attracts bugs!'
    },
    {
        id:2,
        title:'2nd post',
        content:'How do you comfort a JavaScript bug? You console it'
    },
    {
        id:3,
        title:'3rd post',
        content:'Why don’t programmers like nature?Too many bugs!'
    },
    {
        id:4,
        title:'4th post',
        content:'Why do Java developers wear glasses? Because they don’t C#!'
    },
    {
        id:5,
        title:'5th post',
        content:'Why did the developer go broke? Because he used up all his cache!'
    }
];

    res.send(posts);

});



app.listen(port,()=>{
    console.log(`Server is  running at http:\\localhost:${port}`);
});

