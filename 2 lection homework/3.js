// Cоздать классы Monster и Gladiator, оба наследуются от базового класса Warior
// у них есть свои имена, тип атаки и HP.
// у каждого есть методы атаки.
// Атака - рандомное значение после каждого удара, например от 1 до 10.
// Создать класс Game где реализовать метод start(), который выполняет бой между бойцами
// После боя в консоль вывести имя того, кто победил

class Warrior { 
    constructor(name, attackType, hp){ 
      this.name = name; 
      this.attackType = attackType; 
      this.hp = hp; 
    } 
    attack() { 
      return Math.floor(Math.random() * 11); 
    } 
  }
  
  class Monster extends Warrior { 
    constructor(name, attackType, hp){ 
      super(name, attackType, hp); 
    } 
  } 
  
  class Gladiator extends Warrior { 
    constructor(name, attackType, hp){ 
      super(name, attackType, hp); 
    } 
  } 
  
  class Game { 
    constructor(firstContestant, secondContestant) { 
      this.firstContestant = firstContestant; 
      this.secondContestant = secondContestant; 
    }
    
    start() {
      const firstMove = this.firstContestant.attack();
      const secondMove = this.secondContestant.attack();
      
      const winner = (firstMove > secondMove) ? this.firstContestant.name : 
                                              this.secondContestant.name;
      
      return console.log(`${this.firstContestant.name}: ${firstMove} vs. ${this.secondContestant.name}: ${secondMove} => ${winner} wins`); 
    }
  }
  
  const gladiator = new Gladiator('Maximus', 'Chop', 100); 
  const monster = new Monster('Dragon', 'Blast', 100); 
  
  const game = new Game(gladiator, monster);
  game.start()
  