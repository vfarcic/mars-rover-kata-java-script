function MarsRover(location, direction, grid) {

    self = this;
    this.location = (location === undefined) ? [0, 0] : location;
    this.direction = (direction === undefined) ? 'N' : direction;
    this.grid = (grid === undefined) ? [100, 100] : grid;

    this.commands = function(commands) {
        if (commands === undefined) { // Getter
            return this.commandsArray;
        } else { // Setter
            for(var index = 0; index < commands.length; index++) {
                var command = commands[index];
                if (command === 'f' || command === 'b') {
                    move(command);
                } else if (command === 'l' || command === 'r') {
                    turn(command);
                }
            }
            resetLocation();
            this.commandsArray = commands;
        }
    };

    function resetLocation() {
        self.location = [
            (self.location[0] + self.grid[0]) % self.grid[0],
            (self.location[1] + self.grid[1]) % self.grid[1]
        ]
    }

    function move(command) {
        var xIncrease = 0, yIncrease = 0;
        if (self.direction === 'N') {
            yIncrease = -1;
        } else if (self.direction === 'E') { // East
            xIncrease = 1;
        } else if (self.direction === 'S') { // South
            yIncrease = 1;
        } else if (self.direction === 'W') { // West
            xIncrease = -1;
        }
        if (command === 'b') { // Backward
            xIncrease *= -1;
            yIncrease *= -1;
        }
        self.location[0] += xIncrease;
        self.location[1] += yIncrease;
    }

    function turn(command) {
        var directionNumber = directionAsNumber(self.direction);
        if (command === 'l') { // Left
            directionNumber = (directionNumber + 4 - 1) % 4;
        } else { // Right
            directionNumber = (directionNumber + 1) % 4;
        }
        self.direction = self.directions[directionNumber];
    }

    this.directions = ['N', 'E', 'S', 'W'];

    function directionAsNumber(direction) {
        for(var index = 0; index < 4; index++) {
            if (self.directions[index] === direction) return index;
        }
    }

}