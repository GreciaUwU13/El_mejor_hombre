class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
            visibility: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
       /* this.image = loadAnimation("Walking Frame/walking_1.png", "Walking Frame/walking_2.png", "Walking Frame/walking_3.png", 
        "Walking Frame/walking_4.png", "Walking Frame/walking_5.png", "Walking Frame/walking_6.png", "Walking Frame/walking_7.png",
        "Walking Frame/walking_8.png");*/
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        this.bestMan = loadImage("Walking Frame/batman.png");
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
       // image(this.image,pos.x,pos.y+70,300,300);
        if(frameCount <= 200){
             image(this.image,pos.x,pos.y+70,300,300);
             visibility: false;
           }
        if(frameCount >= 200){
            image(this.bestMan, pos.x, pos.y +70, 200, 300);
            this.bestMan.scale = 0.2;
        }
    }
}
