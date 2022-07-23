var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
    container: 'container',
    width: 270,
    height: 270,
});

function draw(){

    var layer = new Konva.Layer();
    let circles = [];

    var delta_X = 0;
    var delta_Y = 0;

    var randomColor = Math.floor(Math.random()*16777215);
    var randomColorDiff = randomColor + 12;
    randomColor = randomColor.toString(16);
    randomColorDiff = randomColorDiff.toString(16);

    var randomPos = Math.floor(Math.random() * 9);
    var pos = 0;


    for (let i=0; i<3; i++){
        delta_X = 0;
        
        for(let j=0; j<3; j++){
            if(randomPos == pos)
                color = randomColorDiff;
            else
                color = randomColor;

            var circle = new Konva.Circle({
                x: 45 + delta_X,
                y: 45 + delta_Y,
                radius: 40,
                fill: "#"+color
            });
            
            delta_X = delta_X + 90;
            console.log("pos: "+pos);
            pos = pos + 1;
            

            circles.push(circle);
        }
        delta_Y = delta_Y + 90;
    }

    for (circle of circles){
        circle.on("click",function(){
            if (this.fill() == "#"+randomColorDiff){
                clearAndDraw();
            }
        });
        circle.on("touchend",function(){
            if (this.fill() == "#"+randomColorDiff){
                clearAndDraw();
            }
        });
    }
    
    // add the shape to the layer
    layer.add(...circles);
    
    // add the layer to the stage
    stage.add(layer);
}

function clearAndDraw(){
    stage.destroyChildren();
    draw();
}

draw();
