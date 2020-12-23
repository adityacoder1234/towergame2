class ground
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;                                                     
      

        var op=
        {
            isStatic:true,
        }
        this.body = Bodies.rectangle(x,y,150,20,op)
        World.add(world,this.body)
    }
    display()
    {

        rect(this.x,this.y,150,20)
    }
}
