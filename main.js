class Character {
	constructor(race, health) {
		this.race = race;
		this.health = health;
	}
}
class WarriorOfWood extends Character {
	constructor(weapon) {
		super('gnome', 100);
		this.weapon = weapon;
		this.attack = function () {
			let health = document.getElementById('health2').innerHTML = player2.health - 6;
			player2.health = health;
		}

	}
}
class WarriorOfKingdom extends Character {
	constructor(weapon) {
		super('human', 90);
		this.weapon = weapon;
		this.attack = function () {
			let health = document.getElementById('health1').innerHTML = player1.health - 6;
			player1.health = health;
		}
	}
}


let player1 = new WarriorOfWood('axe');
let player2 = new WarriorOfKingdom('hammer');


let btn1 = document.getElementById('player1');
let btn2 = document.getElementById('player2');

document.getElementById('race1').innerHTML = player1.race;
document.getElementById('health1').innerHTML = player1.health;
document.getElementById('weapon1').innerHTML = player1.weapon;


document.getElementById('race2').innerHTML = player2.race;
document.getElementById('health2').innerHTML = player2.health;
document.getElementById('weapon2').innerHTML = player2.weapon;


btn1.addEventListener("click", player1.attack);
btn2.addEventListener("click", player2.attack);