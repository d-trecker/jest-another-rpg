const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

function Game() {
    this.rountNumber = 0;
    this.isPlayerTurn = false;
    this.enemies= [];
    this.currentEnemy;
    this.player;

    Game.prototype.initializeGame = function() {
        this.enemies.push(new Enemy('goblin', 'sword'));
        this.enemies.push(new Enemy('troll', 'axe'));
        this.enemies.push(new Enemy ('skeleton', 'dagger'));
        this.currentEnemy = this.enemies[0];

        inquirer
        .prompt({
          type: 'text',
          name: 'name',
          message: 'What is your name?'
        })
        // destructure name from the prompt object
        .then(({ name }) => {
          this.player = new Player(name);
      
          // test the object creation
          this.startNewBattle();
        });
    };
    
}

module.exports = Game;