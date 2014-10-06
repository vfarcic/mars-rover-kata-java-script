describe('Mars Rover', function() {

    describe('You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing', function() {
        it('should set starting location', function() {
            var mr = new MarsRover([12, 21]);
            expect(mr.location).toEqual([12, 21]);
        });
        it('should use default starting location value 0x0 when not assigned', function() {
            var mr = new MarsRover();
            expect(mr.location).toEqual([0, 0]);
        });
        it('should set direction as numeric value', function() {
            var mr = new MarsRover([12, 21], 'N');
            expect(mr.direction).toEqual('N');
        });
        it('should use default starting direction value N when not assigned', function() {
            var mr = new MarsRover([12, 21]);
            expect(mr.direction).toEqual('N');
        });
    });

    describe('The rover receives a character array of commands', function() {
        it('should set commands array', function() {
            var mr = new MarsRover([12, 21], 'N');
            mr.commands(['do', 'this', 'and', 'then', 'do', 'that']);
            expect(mr.commands()).toEqual(['do', 'this', 'and', 'then', 'do', 'that']);
        });
    });

    describe('Implement commands that move the rover forward/backward (f,b)', function() {
        it('should reduce Y when moving north', function() {
            var mr = new MarsRover([12, 21], 'N');
            mr.commands(['f']);
            expect(mr.location).toEqual([12, 20]);
        });
        it('should increase Y when moving south', function() {
            var mr = new MarsRover([12, 21], 'S');
            mr.commands(['f']);
            expect(mr.location).toEqual([12, 22]);
        });
        it('should reduce X when moving west', function() {
            var mr = new MarsRover([12, 21], 'W');
            mr.commands(['f']);
            expect(mr.location).toEqual([11, 21]);
        });
        it('should increase X when moving east', function() {
            var mr = new MarsRover([12, 21], 'E');
            mr.commands(['f']);
            expect(mr.location).toEqual([13, 21]);
        });
        it('should increase Y when moving backwards facing north', function() {
            var mr = new MarsRover([12, 21], 'N');
            mr.commands(['b']);
            expect(mr.location).toEqual([12, 22]);
        });
        it('should reduce Y when moving backwards facing south', function() {
            var mr = new MarsRover([12, 21], 'S');
            mr.commands(['b']);
            expect(mr.location).toEqual([12, 20]);
        });
        it('should increase X when moving backwards facing west', function() {
            var mr = new MarsRover([12, 21], 'W');
            mr.commands(['b']);
            expect(mr.location).toEqual([13, 21]);
        });
        it('should reduce X when moving backwards facing east', function() {
            var mr = new MarsRover([12, 21], 'E');
            mr.commands(['b']);
            expect(mr.location).toEqual([11, 21]);
        });
    });

    describe('Implement commands that turn the rover left/right (l,r)', function() {
        it('should change direction from E to N when command is to turn left', function() {
            var mr = new MarsRover([12, 21], 'E');
            mr.commands(['l']);
            expect(mr.direction).toEqual('N');
        });
        it('should change direction from N to W when command is to turn left', function() {
            var mr = new MarsRover([12, 21], 'N');
            mr.commands(['l']);
            expect(mr.direction).toEqual('W');
        });
        it('should change direction from E to S when command is to turn right', function() {
            var mr = new MarsRover([12, 21], 'E');
            mr.commands(['r']);
            expect(mr.direction).toEqual('S');
        });
    });

    describe('Implement wrapping from one edge of the grid to another (planets are spheres after all)', function() {
        it('should assign grid size', function() {
            var mr = new MarsRover([12, 21], 'N', [12, 33]);
            expect(mr.grid).toEqual([12, 33]);
        });
        it('should use default value 100x100 when not assigned', function() {
            var mr = new MarsRover([12, 21], 'N');
            expect(mr.grid).toEqual([100, 100]);
        });
        it('should return X to 0 when grid is passed', function() {
            var mr = new MarsRover([9, 9], 'E', [10, 10]);
            mr.commands(['f']);
            expect(mr.location).toEqual([0, 9]);
        });
        it('should return Y to 0 when grid is passed', function() {
            var mr = new MarsRover([9, 9], 'S', [10, 10]);
            mr.commands(['f']);
            expect(mr.location).toEqual([9, 0]);
        });
        it('should return X to grid end when grid is passed from west', function() {
            var mr = new MarsRover([0, 9], 'E', [10, 10]);
            mr.commands(['b']);
            expect(mr.location).toEqual([9, 9]);
        });
        it('should return Y to grid end when grid is passed from north', function() {
            var mr = new MarsRover([9, 0], 'N', [10, 10]);
            mr.commands(['f']);
            expect(mr.location).toEqual([9, 9]);
        });
    });

    // TODO Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point and reports the obstacle.
    // TODO Check whether object values are correct (location = number array, direction = ['N'|'S'|'E'|'W'], grid = number array)
    // TODO Check whether command values are correct (['f'|'b'|'l'|'r'])
    // TODO Ignore direction and commands case (lower/upper)

});