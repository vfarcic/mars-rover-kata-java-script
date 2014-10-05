describe('Mars Rover', function() {


    describe('You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing', function() {
        var x = 123;
        var y = 456;
        var direction = 'N';
        var mr = new MarsRover(x, y, direction);

        it('should set starting point', function() {
            expect(mr.location()).toEqual([x, y]);
        });

        it('should set direction', function() {
            expect(mr.direction()).toEqual(direction);
        });

    });

});