class Box
{
    constructor(x,y,width,height)
    {
        var op={
    'friction':1.0,
    'restitution':0.8,
    'density':1.0,
        }
       

        this.body=Bodies.rectangle(x,y,width,height,op) ; 
        this.width=width;
        this.height=height ; 
        
        this.Visibility=255;
        World.add(world,this.body);
    }
    display()
    {
        if(this.body.speed < 3)
        {
            var pos=this.body.position;
            rectMode(CENTER);
             rect(pos.x,pos.y,this.width,this.height);
             fill("white");
        }
        else{
            World.remove(world,this.body)
            push();
            this.Visibility = this.Visibility - 30;
            tint(255,this.Visibility)
            pop();
            var pos=this.body.position;
            rectMode(CENTER);
            rect(pos.x,pos.y,this.width,this.height);
            

        }
     
    }
}



































