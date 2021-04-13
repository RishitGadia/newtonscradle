class Rope{
    constructor(body1,body2){
        var options= {
            bodyA:body1,
            bodyB:body2,
            stiffness:0.04,
            length:10
    
        }
this.chain=Constraint.create(options)
World.add(world,this.chain)
    }
    display(){
      var body1point= this.chain.bodyA.position;
      var body2point= this.chain.bodyB.position;
      strokeWeight(3);
     line(body1point.x,body1point.y,body2point.x,body2point.y);  
    }
}