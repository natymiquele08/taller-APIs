fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => response.json())
      .then(json => {
        
        let espacio= document.getElementById("pokemones");
        espacio.innerHTML= `
        <p>Nombre: ${json.name}</p>
        <p>Numero: ${json.order}</p>
        <img src="${json.sprites.front_default}"</p>



        `

        
        
        
        
        
        console.log(json)
      })