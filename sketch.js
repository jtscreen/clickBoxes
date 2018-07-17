c = ["blue", "blue"]
function setup(){
    createCanvas(600,600);
    fill(0,0,255);
    rect(0,0,300,600);
    rect(300,0,300,600);
}
function mouseClicked(){
    if (mouseX>0 && mouseX<300 && mouseY>0 && mouseY<600){
        if (c[0] == "blue"){
            fill(255,0,0);
            rect(0,0,300,600);
            c[0] = "red"
        } else if (c[0] == "red"){
            fill(0,0,255);
            rect(0,0,300,600);
            c[0] = "blue"
        }
    }
    else if (mouseX>300 && mouseX<600 && mouseY>0 && mouseY<600){
        if (c[1] == "blue"){
            fill(255,0,0);
            rect(300,0,300,600);
            c[1] = "red"
        } else if (c[1] == "red"){
            fill(0,0,255);
            rect(300,0,300,600);
            c[1] = "blue"
        }
    }
}