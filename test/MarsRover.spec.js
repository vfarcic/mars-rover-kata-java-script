describe('Mars Rover', function() {

    describe('You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.', function() {
        var x = 123;
        var y = 456;
        var mr = new MarsRover(x, y);

        it('should set starting point', function() {
            expect(mr.getLocation()).toEqual([x, y]);
        });
    });

});