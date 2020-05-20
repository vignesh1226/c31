class Snake {
  //creating a constructor
  constructor() {
      this.body = [];
      this.body[0] = createVector(floor(w/2), floor(h/2));
      this.xdir = 0;
      this.ydir = 0;
      this.len = 0;
    }
    // direction
    setDir(x, y) {
      this.xdir = x;
      this.ydir = y;
    }
    //increasing the size of the snake by one square when it eats a bug
    update() {
        var head = this.body[this.body.length-1].copy();
      this.body.shift();
      head.x += this.xdir;
      head.y += this.ydir;
      this.body.push(head);
    }
    //increasing the size of the snake by one square when it eats a bug
    grow() {
      var head = this.body[this.body.length-1].copy();
      this.len++;
      this.body.push(head);
    }
    //blanking or finishing the game
    end() {
      var x = this.body[this.body.length-1].x;
      var y = this.body[this.body.length-1].y;
      if(x > w-1 || x < 0 || y > h-1 || y < 0) {
         return true;
      }
      for(var i = 0; i < this.body.length-1; i++) {
          var part = this.body[i];

        if(part.x == x && part.y == y) {
            return true;
        }
      }
      return false;
    }
    //eating the bug
    eat(pos) {
      var x = this.body[this.body.length-1].x;
      var y = this.body[this.body.length-1].y;

      if(x == pos.x && y == pos.y) {
        this.grow();
        return true;
      }
      
      return false;
    }
    //displaying the snake
    display() {
        for(var i = 0; i < this.body.length; i++) {
        fill(0);
        noStroke();
        rect(this.body[i].x, this.body[i].y, 1, 1)
      }
    }
  
  }
