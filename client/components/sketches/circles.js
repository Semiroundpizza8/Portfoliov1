
//------------------------

export default function sketch(p) {
  p.draw = function() {
    // createCircles(10, 200);
    createCircles(1, 1);
    circles = [];
  }
  p.setup = function () {
    // put setup code here
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.colorMode(p.HSB, 360, 100, 100, 1.0);
    p.background(90);
    // createCircles(100, 3);
    // createCircles(75, 3);
    // createCircles(50, 10);
    // createCircles(25, 20);
    // createCircles(10, 200);
    // createCircles(5, 200);
    // createCircles(2, 2000);
    // createCircles(1, 2000);
  }

  let circles = [];
  let newCircles = [];

  function createCircles(radius, numberOfCircles) {
    // Guards from infinite loops
    var guard = 0;
    for (var i = 0; i < numberOfCircles; i++) {
      // Overlap flag
      var overlapping = false;

      // Defines circles attributes
      var circle = {
        x: radius + p.random(p.width - radius * 2),
        y: radius + p.random(p.height - radius * 2),
        r: radius
      }

      // Checks distance from all other circles
      for (var j = 0; j < circles.length; j++) {
        let madeCircle = circles[j];
        let d = p.dist(circle.x, circle.y, madeCircle.x, madeCircle.y);
        // if distance < radius1+radius2
        if (d < circle.r + madeCircle.r) {
          overlapping = true;
          break;
        }
      }

      // If it occupies an empty space
      if (!overlapping) {
        circles.push(circle);
        newCircles.push(circle);
      } else {
        i--;
        guard++;
        if (guard > 10000) {
          break;
        }
      }

    }

    // Draws all new circles
    for (var k = 0; k < newCircles.length; k++) {
      let currCircle = newCircles[k];
      p.noStroke();
      let hue = p.map(currCircle.y, currCircle.r, p.height - currCircle.r, 0, 100);
      let sat = p.map(currCircle.x, currCircle.r, p.width - currCircle.r, 0, 50);
      p.fill(200 + hue + p.random(-30, 10), 15 + sat, 70);
      p.ellipse(currCircle.x, currCircle.y, currCircle.r * 2, currCircle.r * 2);
    }

    newCircles = [];
  }


}