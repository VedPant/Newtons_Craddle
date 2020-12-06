class BOB{
    constructor(x,y,r){
        var options={
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 1
    }
    this.body= Bodies.circle(x,y,r,options);
    this.width=r;
    this.height=r;
    World.add(world, this.body);
    }


    display(){
        var pos=this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill("Orange");
        ellipse(0,0,this.width,this.height);
        pop();
    }
 }