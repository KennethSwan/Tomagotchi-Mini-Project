class Tomagotchi {
	constructor(name){
		this.boredom = [];	//
		this.sleepiness = []; // These are starting parameters, will need to 
		this.hunger = []; // increase as time goes on. 
		this.age = 0;
		this.name = name; 		//1 interval, no more than one. Use setInterval()
	} 
	nameGreet(){
		console.log("Hey! I`m " + " ,man!");
	}
	hungerGreet(){
		console.log("I`m starving, man!");
	}
	sleepinesGreet(){
		console.log("I need to get some sleep, man!");
	}
	boredomGreet(){
		console.log("I'm so bored, man! Let's bowl or something!");
	}
	dieGreet(){
		console.log("This isn`t `nam Walter! There are rules!");		
	}
}
// const pet = new Tomagotchi();

const game = {
	pet: null,
	time: 0,

	//time
	//print values. When one changes, show them all. 
	// don't try to over think it. One step at a time.
	// need to set up a timer for each property to get to ten 
	//Prompt user to do something if the level of one or 
	//more properties gets to zero. 
	// When player clicks a button, decrease that property by 1
	start(name){

		// instantiate the Tomagotchi class
		// dude is now an object made from the Toma class
		const dude = new Tomagotchi(name);

		// dude is being set as a property of (variable) in the game object.
		this.pet = dude;

		this.setTimer()
	},
 
 	setTimer(){
		const $timer = $('#timer');
		const interval = setInterval(() => {
			console.log("hey");
			this.time++
			this.pet.age++
			console.log(this.pet.age);
			
			if(this.time === 0) {
				clearInterval(interval);
			}

			$timer.text(`timer: ${this.time}s`)
		}, 1000)
	} 
}
//Listeners {
// Add listener for feeding, going to sleep, and playing
// Make character move around screen randomly as time pass.
// Use jquery animation 	
// Make The Dude appear when "Wake up The Dude" is clicked. 
// jQuery(document).ready(function($){
// 	$('.Wake Up Dude')
// }
 $('form').on('submit', (event) => {
    event.preventDefault();
    console.log('starting game');  
    console.log( $('#input-box').val() + ' is my name!' );
    let petName = $('#input-box').val();
	game.start(petName)  
  });


//}