function MarsRover(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.location = function() {
        if (isNaN(this.x)) throw "X must be a number";
        return [x, y];
    };
    this.direction = function() {
        return direction;
    };
}