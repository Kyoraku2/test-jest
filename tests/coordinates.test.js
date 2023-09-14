import {Coordinates} from "../src/Coordinates.js";

test('testXY', () => {
    let x = 7.0;
    let y = 42.0;

    let coordinates = new Coordinates(x, y);
    
    expect(coordinates.getX()).toBe(x);
    expect(coordinates.getY()).toBe(y);
});
  
  


/*
public function testXY ( ) {
	
	        $x = 7.0;
	        $y = 42.0;
	
			$coordinates = new Coordinates($x, $y);
	        $this->assertEquals($coordinates->getX(),$x);
            $this->assertEquals($coordinates->getY(),$y);
	    }

	    public function testCast ( ) {

	        $x = 7;
	        $y = 42;

            $coordinates = new Coordinates($x, $y);
            $this->assertTrue(is_float($coordinates->getX()));
            $this->assertTrue(is_float($coordinates->getY()));
			$this->assertSame($coordinates->getX(), 7.0);
			$this->assertSame($coordinates->getY(), 42.0);
	    }
*/