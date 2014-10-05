function MarsRover(location, direction, grid) {

    if (location === undefined) location = [0, 0];
    direction = (direction === undefined) ? 0 : directionAsNumber(direction);
    if (grid === undefined) grid = [100, 100];

    this.location = function() {
        return location;
    };

    this.direction = function() {
        switch(direction) {
            case 0: return 'N';
            case 1: return 'E';
            case 2: return 'S';
            case 3: return 'W';
        }
    };

    this.grid = function() {
        return grid;
    };

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
        var locationX = (location[0] + grid[0]) % grid[0];
        var locationY = (location[1] + grid[1]) % grid[1];
        location = [locationX, locationY]
    }

    function move(command) {
        var xIncrease = 0, yIncrease = 0;
        if (direction === 0) { // North
            yIncrease = -1;
        } else if (direction === 1) { // East
            xIncrease = 1;
        } else if (direction === 2) { // South
            yIncrease = 1;
        } else if (direction === 3) { // West
            xIncrease = -1;
        }
        if (command === 'b') { // Backward
            xIncrease *= -1;
            yIncrease *= -1;
        }
        location[0] += xIncrease;
        location[1] += yIncrease;
    }

    function turn(command) {
        if (command === 'l') { // Left
            direction = (direction + 4 - 1) % 4;
        } else { // Right
            direction = (direction + 1) % 4;
        }
    }

    function directionAsNumber(direction) {
        switch(direction) {
            case 'N': return 0;
            case 'E': return 1;
            case 'S': return 2;
            case 'W': return 3;
        }
    }

}