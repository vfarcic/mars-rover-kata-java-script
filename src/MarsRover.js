function MarsRover(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.location = function() {
        return [x, y];
    };
    this.direction = function() {
        return direction;
    };
}