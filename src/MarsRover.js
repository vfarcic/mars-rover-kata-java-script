function MarsRover(x, y) {
    this.x = x;
    this.y = y;
    this.getLocation = function() {
        return [x, y];
    };
}