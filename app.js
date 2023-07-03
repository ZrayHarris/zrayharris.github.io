function countdown(num){
    
    let count = setInterval(function(){
        num--;
        if(num>0){
            console.log(num);
        }
        else{
            console.log("DONE!");
            clearInterval(count);
        }
    },1000)
}

function randomGame(){
    let count = 0;
    let num = Math.random()

    let game = setInterval (function(){
        if (num < .75){
            num = Math.random()
            count++;
        }
        else{
            clearInterval(game);
            console.log(`It took ${count} tries before we found a number greater than .75`)
        }

    },1000);
}