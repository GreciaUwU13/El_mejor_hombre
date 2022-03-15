class Rain {
    constructor(x, y){
        var options = {
            'restitution': 1,
            'isStatic': false,
            'density': 0.4, 
            'friction': 0.1,
        }
        this.Rain = Bodies.circle(x, y, 5, options);//creo el cuerpo de la lluvia
        World.add(world, this.Rain);//añado el cuerpo al mundo
    }
    display(){
       // var pos = this.Rain.position;
        //características que tendrá la lluvia
        var pos = this.Rain.position;
        var angle = this.Rain.angle;
        push();
        fill ("blue");
        stroke ("blue");
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(20, 100, 5, 5);
        /*instrucción para que aparezcan de forma aleatoria
        if(frameCount <= 100){
            this.Rain, pos.x = (random(100, 100)), pos.y = (random(100, 100));
        }*/
        //this.update();  //marca error cuando lo añado
        pop();
    }
    update(){
        if(this.Rain.position.y > height){
            Matter.body.setPosition(this.Rain, {x: random(0, 400), y: random(0, 400)})
        }
    }
    /*push(){
        for(var i = 0; i<maxDrops; i++){
            drops.push(new createDrop(random(0, 400), random(0, 400)));
        }}*/
}