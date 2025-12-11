//старый способ создания класса, при помощи функций, и прототипов
/**
function Vacation(destination, length) {
	this.destination = destination;
	this.length = length;
}

Vacation.prototype.print = function() {
	console.log(this.destination + " | " + this.length + " days");
};

const maui = new Vacation("Maui", 7);

maui.print(); //Maui | 7 days
**/
//-----
//Новый способ, создание аналогичного класса (под капотом, все равно, прототипы)
class Vacation {
	constructor(destination, length) {
		this.destination = destination;
		this.length = length;
	}
	
	print() {
		console.log(`${this.destination} will take ${this.length} days`);
	}
}
/**
const trip = new Vacation("Santiago, Chile", 7);

trip.print();	// Santiago, Chile will take 7 days.
**/
//-----
//Пример наследования
class Expedition extends Vacation {
	constructor(destination, length, gear) {
		super(destination, length);
		this.gear = gear;
	}
	
	print() {
		super.print();
		console.log(`Bring your ${this.gear.join(" and your ")}`);
	}
}

const trip = new Expedition("Mt/ Whitney", 3, [
	"sunglasses",
	"prayer flags",
	"camera"
]);

trip.print();

//Mt/ Whitney will take 3 days
//Bring your sunglasses and your prayer flags and your camera