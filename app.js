var a=5,b=3,c=5;
var count=0;
if(a==5){
    count++;
}else{}
if(b==5){
    count++;
}else{}
if(c==5){
    count++;
}else{}
console.log(count);

// switch statement - nuhtsul shalgah
var word = "Bonjour";
switch(word){
    case "hello":
        console.log("Sain uu?");
        break;
    case "Bonjour":
        console.log("Sain uu?");
        break;
    default :
        console.log("Iim vg bhgui bna");
        break;
}
// 1-> Monday 2-> Tuesday 
// jims -> ymar ungutei ?
var jims="banana";
switch(jims){
    case "banana":
    case "mango":
    case "lemon":
        console.log("shar");
        break;
    case "apple":
    case "watermelon":
        console.log("ulaan");
        break;
    default:
        console.log("Iim jims medehgui");
}

// alert prompt if,else

alert("Ta oid sersen. Gertee harih zamaa olvol hojno");
alert("2 salaa zam bna. /zuun/baruun/");
var choice = prompt("Ta zuun esvel baruun?");
if(choice=="zuun"){
    alert("Baavgai taarlaa");
    var choice2= prompt("Zugtah esvel dairah");
    if(choice2=="zugtah"){
        alert("Ta yallaa");
    }else{
        alert("idvvlne");
    }
}else if(choice=="baruun"){
    console.log("Buruu zam songoson tul vhlee");
}else{
    console.log("Buruu hariult");
}