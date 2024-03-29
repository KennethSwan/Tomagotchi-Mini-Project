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
    },

    feedTama() {
        this.pet.hunger--;
        this.printProps()
        console.log("Nom Nom Nom");
        $("img").attr("src", "data:image/jpeg;base64,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")
    },

    playWithTama() {
        this.pet.boredom--;
        this.printProps()
        $("img").attr("src", "https://media2.giphy.com/media/PHNKdvbEqax7W/giphy.gif")
        console.log("That rug really tied the room together...");
    },
    sleepTama() {
        this.pet.sleepiness--;
        this.printProps()
        $("img").attr("src", "https://cdn.vox-cdn.com/thumbor/D-0GKk0F8D-hvI0XIoMqQQWaLMk=/0x0:2320x1302/1200x800/filters:focal(1134x405:1504x775)/cdn.vox-cdn.com/uploads/chorus_image/image/58966233/Screen_Shot_2018_03_09_at_8.08.00_AM.0.png")
        console.log("Goodnight, man!");
    },
    wakeUp() {
    $("img").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-2L0rgYS6dr_fwBv4mjdms9pf9wVl9V7M59xzamOUHCcvt1Q")
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
                clearInterval(interval)
                console.log("Pet has died of hunger!");
            }
            if (this.time % 8 === 0) {
                this.pet.boredom++;
            }
            if (this.pet.boredom == 10) {
                clearInterval(interval)
                console.log("Pet has died of boredom!");
            }
            if (this.time % 10 === 0) {
                this.pet.sleepiness++;
            }
            if (this.pet.sleepiness == 10) {
                clearInterval(interval)
                console.log("Pet has died of lack of sleep!");
            }
            if (this.pet.hunger == 7 || this.pet.sleepiness == 7 || this.pet.boredom == 7) {
                $("img").attr("src", "data:image/jpeg;base64,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")
            }
            if (this.pet.hunger == 10 || this.pet.sleepiness == 10 || this.pet.boredom == 10) {
                $("img").attr("src", "https://i.imgur.com/EwCm14R.gif?noredirect")
                console.log("this is the id=\"main\" div that we want to change the src attribute for");
                console.log($("img"));
            }

            this.printProps() // call this any time any value changes
        }, 500)
    }
}

//Listeners {
// Add listener for feeding, going to sleep, and playing
// Make character move around screen randomly as time pass.
// Use jquery animation     
// Make The Dude appear when "Wake up The Dude" is clicked. 
// jQuery(document).ready(function($){
//  $('.Wake Up Dude')
// }
$('form').on('submit', (event) => {
    event.preventDefault();
    console.log('starting game');
    console.log($('#input-box').val() + ' is my name!');
    let petName = $('#input-box').val();
    game.start(petName)
});
$('#feed').on('click', (event) => {
    game.feedTama()
});
$('#play').on('click', (event) => {
    game.playWithTama()
});
$('#off').on('click', (event) => {
    game.sleepTama()
});
$('#on').on('click', (event) => {
    game.wakeUp()
});