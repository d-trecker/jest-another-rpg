const Potion = require('../lib/Potion');

jest.mock('../lib/Potion.js');

console.log(new Potion());

const Player = require('../lib/Player');

test('creates a player object', () => {
    const player = new Player('Dylan');
  
    expect(player.name).toBe('Dylan');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
      expect.arrayContaining([expect.any(Object)])
    );
  });