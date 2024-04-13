class Unit {
    constructor(name, cost, power, resilience) {
      this.name = name;
      this.cost = cost;
      this.power = power;
      this.resilience = resilience;
    }
  
    attack(target) {
      target.takeDamage(this.power);
    }
  
    takeDamage(damage) {
      this.resilience -= damage;
      if (this.resilience <= 0) {
        console.log(`${this.name} is defeated!`);
      }
    }
  
    getInfo() {
      return `Name: ${this.name}, Cost: ${this.cost}, Power: ${this.power}, Resilience: ${this.resilience}`;
    }
  }
  
  class Effect {
    constructor(name, cost, text, stat, magnitude) {
      this.name = name;
      this.cost = cost;
      this.text = text;
      this.stat = stat; // power or resilience
      this.magnitude = magnitude;
    }
  
    play(target) {
      console.log(`Playing ${this.name} on ${target.name}`);
      target[this.stat] += this.magnitude;
    }
  }
  
  // Create Unit instances
  const redBeltNinja = new Unit("Red Belt Ninja", 3, 4, 4);
  const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
  
  // Create Effect instances
  const hardAlgorithm = new Effect(
    "Hard Algorithm",
    2,
    "Increase target's resilience by 3",
    "resilience",
    3
  );
  const unhandledPromiseRejection = new Effect(
    "Unhandled Promise Rejection",
    1,
    "Reduce target's resilience by 2",
    "resilience",
    -2
  );
  const pairProgramming = new Effect(
    "Pair Programming",
    3,
    "Increase target's power by 2",
    "power",
    2
  );
  
  // Play effects on Red Belt Ninja
  hardAlgorithm.play(redBeltNinja);
  unhandledPromiseRejection.play(redBeltNinja);
  pairProgramming.play(redBeltNinja);
  
  console.log(redBeltNinja.getInfo()); // Print updated stats
  
  // Attack
  redBeltNinja.attack(blackBeltNinja);
  
  // Check for defeat
  if (blackBeltNinja.resilience <= 0) {
    console.log(`${blackBeltNinja.name} is defeated!`);
  }
  