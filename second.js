const fs = require('fs');
fs.watch('/Users/amitsrivastava/Documents/music-app/demo/score.txt', ()=>{
    fs.readFile('/Users/amitsrivastava/Documents/music-app/demo/score.txt', (err, content)=>{
        if(err){
            console.log('Error ', err);

        }
        else{
            console.log('Score Updated ', content.toString());
        }
    })
})