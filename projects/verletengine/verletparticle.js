class VerletParticle {
    constructor (x,y,id,setColor) {
        this.currentPos = new Vector(x,y);
        this.lastPos = new Vector(x,y);
        this.acc = new Vector(0,1);
        this.color = "white";
        if (setColor !== undefined) {
            this.color = setColor;
        }
        this.id = id;
    }

    //run physics based on current position, last position, and the delta time
    updatePos(dt) {
        let vel = Vector.sub(this.currentPos,this.lastPos); //set current velocity
        this.lastPos = this.currentPos.copy();
        this.currentPos.add(vel); //apply current velocity
        this.currentPos.add(Vector.mult(this.acc,(dt**2),(dt**2))); //apply gravity
    }

    //unused "offset position" function
    offsetPos(offsetVector) {
        this.currentPos = Vector.add(this.currentPos,offsetVector); //this function never got used :(
    }
}