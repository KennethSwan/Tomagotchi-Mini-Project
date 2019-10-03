class Tomagotchi {
    constructor(name) {
        this.boredom = 0; //
        this.sleepiness = 0; // These are starting parameters, will need to 
        this.hunger = 0; // increase as time goes on. 
        this.age = 0;
        this.name = name; //1 interval, no more than one. Use setInterval()
    }
    nameGreet() {
        console.log("Hey! I`m " + " ,man!");
    }
    hungerGreet() {
        console.log("I`m starving, man!");
    }
    sleepinesGreet() {
        console.log("I need to get some sleep, man!");
    }
    boredomGreet() {
        console.log("I'm so bored, man! Let's bowl or something!");
    }
    dieGreet() {
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
    start(name) {

        // instantiate the Tomagotchi class
        // dude is now an object made from the Toma class
        const dude = new Tomagotchi(name);

        // dude is being set as a property of (variable) in the game object.
        this.pet = dude;

        this.setTimer()
    },

    // call this any time any value changes
    printProps() {
        const $age = $('#age')
        $age.text(`age: ${this.pet.age}`)
        const $hunger = $('#hunger');
        $hunger.text(`hunger: ${this.pet.hunger}`);
        const $timer = $('#timer');
        $timer.text(`timer: ${this.time}s`)
        const $boredom = $('#boredom');
        $boredom.text(`boredom: ${this.pet.boredom}`)
        const $sleepiness = $('#sleepiness');
        $sleepiness.text(`sleepiness: ${this.pet.sleepiness}`)
        $('#feed').on('click', (event) => {
            this.pet.hunger--;
        })
        $('#play').on('click', (event) => {
            this.pet.boredom--;
        })    
    },

	setTimer() {
    const interval = setInterval(() => {
        this.time++

        if (this.time % 10 === 0) {
            this.pet.age++;
        }
        if (this.time % 5 === 0) {
            this.pet.hunger++;
        }
        if (this.pet.hunger == 10) {
            console.log("Pet has died of hunger!");
        }
        if (this.time % 8 === 0) {
            this.pet.boredom++;
        }
        if (this.pet.boredom == 10) {
            console.log("Pet has died of boredom!");
        }
        if (this.time % 3 === 0) {
            this.pet.sleepiness++;
        }
        if (this.pet.sleepiness == 10) {
            console.log("Pet has died of lack of sleep!");
        }

        this.printProps() // call this any time any value changes
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
    console.log($('#input-box').val() + ' is my name!');
    let petName = $('#input-box').val();
    game.start(petName)
});


// 1. print values method that does it jQuery
// 2. get hungrier as time passes -- use your print values function
// 3. pressing button should change hunger