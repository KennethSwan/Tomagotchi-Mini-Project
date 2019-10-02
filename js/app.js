class Tomagotchi {
	constructor(name){
		this.boredom = [1,2,3,4,5,6,7,8,9,10];	//
		this.sleepiness = [1,2,3,4,5,6,7,8,9,10]; // These are starting parameters, will need to 
		this.hunger = [1,2,3,4,5,6,7,8,9,10]; // increase as time goes on. 
		this.age = "28 weeks";
		this.name = name; 		//1 interval, no more than one. Use setInterval()
	} 
	name(){
		console.log("Hey! I`m " + " ,man!");
	}
	hunger(){
		console.log("I`m starving, man!");
	}
	sleepines(){
		console.log("I need to get some sleep, man!");
	}
	boredom(){
		console.log("I'm so bored, man! Let's bowl or something!");
	}
	die(){
		console.log("This isn`t `nam Walter! There are rules!");		
	};
}
const dude = new Tomagotchi('The Dude');	
console.log(dude);

const game = {
//time
//print values. When one changes, show them all. 
// don't try to over think it. One step at a time.
// need to set up a timer for each property to get to zero 
//Prompt user to do something if the level of one or 
//more properties gets to zero. 
// When player clicks a button, increase that property by 1
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
    console.log('clicked');  
    console.log( $('#input-box').val() );
    event.preventDefault();
   
  });


//}