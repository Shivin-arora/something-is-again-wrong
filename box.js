class Box{

    constructor(x,y,width,height,color){
    
        var option={
            restitution : 0.4,
            density : 1.3,
            friction :1.3
        }
        this.thanos = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        this.color=color;
       // this.image=loadImage("sprites/wood1.png");
        World.add(world, this.thanos);
    
    }
    
    
    show(){
    
    push();
    var pos = this.thanos.position; 
    var angle = this.thanos.angle;
    
    translate(pos.x,pos.y);
    rotate(angle);
   // stroke("white");
    fill(this.color);
    rectMode(CENTER);
   // image(this.image,0,0,this.width,this.height);
    rect(0,0,this.width,this.height);
    pop();
    }
    
    }