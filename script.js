// Bind 

var pokemon = {
    firstname: "Pika",
    lastname: "Chu ",
    getPokeName: function() {
        var fullname = this.firstname + " " + this.lastname;
        return fullname;
    },
};

var pokemonName = function() {
    console.log(this.getPokeName() + "I choose you!");
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

const logPokemon = pokemonName.bind(pokemon);

logPokemon('Halwa', 'algo');

/* Explanation

    The bind() method creates a new function that, when called, has its this keyword set to the provided value. 
    JS engine is creating a new pokemonName instance and binding pokemon as its this variable. It is important to understand that it copies the pokemonName function.
    After creating a copy of the pokemonName function it is able to call logPokemon(), although it wasn’t on the pokemon object initially. It will now recognizes its properties (Pika and Chu) and its methods.
    
    It also accepts parameters while calling the function.
    */
   

/* 
  Call() 
  It allows additional parameters in the same function while binding.
  Executes the function it was called right away
  It doesnot create copy of the function while calling
  
  Apply()
  
  Only difference between Apply and Call() is that the parameters it accepts in array
*/

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms
