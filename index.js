const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
    cats.push("Ralph");
    return cats;
}
function destructivelyPrependCat(){
    cats.unshift("Bob");  
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(){
    const newCats = [ ...cats , "Broom"];
    return newCats;
}
function prependCat(){
    const newCats =  [ "Arnold" , ...cats ];
    return newCats;
}
function removeLastCat(){
    const newCats = cats.slice(0 ,2);
    return newCats;
}
function removeFirstCat(){
    const newCats = cats.slice(1 ,3);
    return newCats;
}
console.log(removeFirstCat());
