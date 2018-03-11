// ----------------------------
var particles = [];

export default function sketch(p) {

  p.setup = function() {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.colorMode(p.HSB);
    p.angleMode(p.DEGREES);
    // background(0)
    // Add an initial set of boids into the system
    p.ellipse(100, 100, 100, 100);
    for (var i = 0; i < 100; i++) {
      particles.push(new Particle(p.random(window.innerWidth), p.random(window.innerHeight)));
    }
    // console.log(particles);
  }

  p.draw = function() {
    for (var i = 0; i < particles.length; i++) {
      let particle = particles[i];
      particle.run();
    }
  }

  function Particle(x, y) {
    this.acceleration = p.createVector(0, 0);
    this.velocity = p.createVector(p.random(-1, 1), p.random(-1, 1)); // Gives each a different initial velocity
    this.position = p.createVector(x, y);
    this.r = 30.0 + p.random(80.0); // Radius of particular circle
    this.maxSpeed = 3;    // Maximum speed
    this.maxForce = 0.05; // Maximum steering force
  }

  Particle.prototype.run = function () {
    var steer = this.behaviors();
    this.update(steer);
    this.borders();
    // console.log('here')
    this.render();
  }

  Particle.prototype.behaviors = function () {
    // Must rotate while in contact
    // Must draw an ellipse at average for distance while in contact
    var steer = p.createVector(steer);
    for (var i = 0; i < particles.length; i++) {
      var otherParticle = particles[i];
      var distance = this.position.dist(otherParticle.position);
      let colorParse = 30 - (distance / 2);
      p.fill(distance * 1.5);
      p.noStroke();
      p.ellipse(this.position.x, this.position.y, colorParse, colorParse);

      if ((distance > 2 && distance < this.r)) {
        this.velocity.rotate(1);
        let colorParse = 30 - (distance / 2);
        let xMiddle = (this.position.x + otherParticle.position.x) / 2;
        let yMiddle = (this.position.y + otherParticle.position.y) / 2;
        p.fill(distance * 1.5);
        p.noStroke();
        p.ellipse(xMiddle, yMiddle, colorParse, colorParse);

        // Separation
        var diff = this.position.sub(otherParticle.position);
        diff.normalize();
        diff.div(distance);        // Weight by distance
        steer.add(diff);
      }
    }
  }

  Particle.prototype.borders = function () {
    if (this.position.x < 0) this.position.x = window.innerWidth;
    if (this.position.y < 0) this.position.y = window.innerHeight;
    if (this.position.x > p.innerWidth) this.position.x = 0;
    if (this.position.y > p.innerHeight) this.position.y = 0;
  }

  Particle.prototype.render = function () {
    // console.log(this.position.x, this.position.y)
    console.log("X IS:", Math.floor(this.position.x))
    p.ellipse(this.position.x, this.position.y, this.r, this.r);
  }

  Particle.prototype.update = function () {
    // Add accel to velocity
    this.velocity.add(this.acceleration);
    // Limit by max
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    // Reset Accel
    this.acceleration.mult(0);
  }
}