
var array_length=50;
var page_size =5;
var start_index=1;
var end_index=10;
var current_index=1;
var max_index=10;

function but(){

let page = document.createElement('div')
page.className="index_buttons";
page.innerHTML=`<button>previous</button>`
for(var i=1;i<=max_index;i++){
page.innerHTML+=`<button>${i}</button>`
}
page.innerHTML+=`<button>next</button>`
document.body.append(page)
highlightedIndexButton();
}
but()

function highlightedIndexButton(){
  start_index=((current_index-1)*page_size)+1;
  end_index=(start_index+page_size)-1;
  if(end_index>array_length){
    end_index=array_length;
  }

}


  


















let container = document.createElement("div")
container.className="container";
let row = document.createElement("div")
row.className="row"

container.append(row)
document.body.append(container)

async function pokemon()

{
  try{

let pokeData = await fetch (`https://pokeapi.co/api/v2/pokemon/40/`)
let resultData = await pokeData.json()
console.log(resultData)
console.log("Ability")
console.log(resultData.abilities[0].ability.name)
console.log(resultData.abilities[1].ability.name)
console.log(resultData.moves[0].move.name)
    console.log(resultData.abilities[2].ability.name)
    console.log("")
    console.log("weight")



console.log(resultData.weight)
console.log("")

console.log(resultData.sprites.other["official-artwork"].front_default)
}

catch(error){
  console.log(error)
}   
}
pokemon()



async function pokemon1()

{
  try
  {
  
  for(i=1;i<=50;i++){
    let apokeData = await fetch (`https://pokeapi.co/api/v2/pokemon/${i}/`)
    let aresultData = await apokeData.json()
    console.log(aresultData)

    row.innerHTML+= `<div class="card col-lg-3 col-sm-12" style="width: 18rem;">
    <div class="card-header" style="text-align: center; background-color:black ; color:white;"><h5>${aresultData.name}<h5>
      </div>
    <img src="${aresultData.sprites.other["official-artwork"].front_default}"  class="card-img-top" alt="country card">
    <div class="card-body" >
      <h5 class="card-title" style="text-align: center;"> Abilities : </b> ${aresultData.abilities[0].ability.name}</h5>
      <h5 class="card-title" style="text-align: center;"> Move     : ${aresultData.moves[0].move.name}</small></h5>
      <h5 class="card-title" style="text-align: center;"> Weight   :${aresultData.weight}</small></h5>
      </div>
    </div>`
  }



  
  }

  catch(error){
    console.log(error)
  }   
    

}
pokemon1()


