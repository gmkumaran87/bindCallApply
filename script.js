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
};

const logPokemon = pokemonName.bind(pokemon);

logPokemon();
