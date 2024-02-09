document.addEventListener('DOMContentLoaded', ()=>{
    
    var quantidade = document.getElementById('quantidade');
    quantidade.addEventListener('keyup', ()=>{
            pegaPokemons(quantidade.value);
    })

    pegaPokemons(10);
function pegaPokemons(quantidade){

    fetch('https://pokeapi.co/api/v2/pokemon?limit='+ quantidade)
    .then(response => response.json())
    .then(allpokemon => {
        var pokemons = [];
        allpokemon.results.map((val)=>{
            
            fetch(val.url)
             .then(response => response.json())
             .then(pokemonSingle => {
                pokemons.push({nome:val.name,imagem:pokemonSingle.sprites.front_default});
                
                if(pokemons.length == quantidade){
                    //Finalizamos nossa aplicação
                    //console.log(pokemons);
                var poker_container = document.querySelector('.poker_container');
                poker_container.innerHTML = '';

                    pokemons.map((val)=>{
                        
                        poker_container.innerHTML += 
                        `
                        <div class="pokemon">
                            <img src="`+ val.imagem +`">
                            <p>`+ val.nome +`</p>
                        </div>
                        `
                    });
                }
             });
        })
        pokemons.map((val)=>{
            console.log(val.nome);
        });
    });


};

});








