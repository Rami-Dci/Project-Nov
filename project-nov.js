


class AttackSkill {
  constructor(attack, damage, magic) {
    this.attack = attack;
    this.damage = damage;
    this.magic = magic;
  }
}



class Pokemon {
  constructor(name, health, magic, skills = [], counter = 0) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = skills;
    this.counter = counter;
   
  } 



learnAttackSkill(newSkill) {
  this.skills.push(newSkill);
}

showStatus() {
  console.log(`${this.name} - Health: ${this.health}, Magic: ${this.magic}`);
  if (this.counter > 3) {
    console.log(`${this.name} has won the battle!`);
  }
}

getMagics() {
  const randomMagic = Math.floor(Math.random() * 21);
  this.magic += randomMagic;
}

hasEnoughMagic(skillName) {
  const skill = this.skills.find((element) => element.attack === skillName);
  if (skill && this.magic >= skill.magic) {
    return true;
  }
  return false;
}

isAlive() {
  return this.health > 0;
}

attack(skillName, opponent) {
  if (!this.isAlive()) {
    console.log(`${this.name} is fainted and cannot attack.`);
    return;
  }
  if (!opponent.isAlive()) {
    console.log(`${opponent.name} has fainted. Can't attack a fainted opponent.`);
    return;
  }
  const skill = this.skills.find((element) => element.attack === skillName);
  if (skill && this.hasEnoughMagic(skillName)) {
    this.magic -= skill.magic;
    opponent.health -= skill.damage;
    this.counter++;
    console.log(
      `${this.name} used ${skill.attack} against ${opponent.name} causing ${skill.damage} damage.`
    );
    this.showStatus();
    opponent.showStatus();
  } else {
    console.log(`${this.name} cannot use ${skillName} due to insufficient magic.`);
  }
}


}



// create new Pokemons
let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

// create new skills that Pokemons can learn
let lightning = new AttackSkill("lightning", 40, 30);
let bombing = new AttackSkill("poisonSeed", 20, 20);

// pikachu learning skills
pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(bombing);

// bulbasaur learning skills
bulbasaur.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(bombing);


// Pokemons starts attacking each other
pikachu.attack("lightning", bulbasaur);
bulbasaur.attack("poisonSeed", pikachu);
pikachu.attack("poisonSeed", bulbasaur);
bulbasaur.attack("lightning", pikachu);
pikachu.attack("lightning", bulbasaur);
pikachu.attack("poisonSeed", bulbasaur); // bulbasaur is already dead!