
var gameState2 = function(){
}

gameState2.prototype = {
    preload:preload2,
    create:create2,
    update:update2
};


function preload2()
{
    //game.load.image('playAgain','assets/img/playAgain.png');
    game.load.image('back','assets/img/background.png');
    game.load.image('mainButton','assets/img/')
}
function create2()


{
    leaderText = game.add.text(game.world.width/2,game.world.height/6, 'leaderboard', { fontSize: '45px', fill: '#FFF' });
    var temp = Math.floor((score/10)*(meters/10)); 
    game.add.text(40, 30, temp, style);
    socket.emit("sendScore",temp);
    socket.emit('getHighScore');
    socket.on('sendHighScore', function (data) {
        console.log(data);
        var i = 0;
        game.add.text(200,100,"RANK",{fontSize: '18px',fill:'#fff'});
        game.add.text(500,100,"NAME",{fontSize: '18px',fill:'#fff'});
        game.add.text(800,100,"SCORE",{fontSize: '18px',fill:'#fff'});

for(var i=0;i< data.length;i++)
        {
            var obj = data[i];
            game.add.text(200,50*i+150,i+1,{fontSize: '18px',fill:'#fff'});
            game.add.text(500,50*i+150,obj.name,{fontSize: '18px',fill:'#fff'});
            game.add.text(800,50*i+150,obj.score,{fontSize: '18px',fill:'#fff'});
        }

    })
}

function update2()
{

}