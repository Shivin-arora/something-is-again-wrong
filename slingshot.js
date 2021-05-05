class Rope{

    constructor(BodyA,pointB){
    var options={
    bodyA: BodyA,
    pointB: pointB,
    length: 100,
    stiffness: 0.001
}      
        this.attacher = Constraint.create(options);
        World.add(world,this.attacher);

     //this.p=pointB;
    }

    fly(){
        this.attacher.bodyA = null;
    }

asbv(){ 
    
    if(this.attacher.bodyA){
    var pos = this.attacher.bodyA.position;
    var posb = this.attacher.pointB;
    
    strokeWeight(4);
    
    console.log("1"+pos.x);

    console.log("1"+pos.y);

    //console.log("2"+posb.x);

    console.log("2"+posb.y);

    line(pos.x,pos.y,posb.x,posb.y);
    }
}
//this.attacher.pointB.x



}