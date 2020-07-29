class Blob {
    constructor(x,y,radius){
        var options = {
            'restitution':0.5,
            'friction':0.5,
            'density':1.0,
            isStatic: false,
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var radius= this.body.radius;
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("green")
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius, this.radius);
        pop();
        }
}
