console.log("test");

function write(){

    console.log("write function is functional");
    var fruit = document.getElementById('fruit').value;
    var noun = document.getElementById('noun').value;
    var animal = document.getElementById('animal').value;
    var adj = document.getElementById('adj').value;
    var szn = document.getElementById('szn').value;
    var toy = document.getElementById('toy').value;
    var weapon = document.getElementById('weapon').value;
    var place = document.getElementById('place').value;
    var time = document.getElementById('time').value;
    var villan = document.querySelector('input[name="villan"]:checked').value;
   

    console.log(fruit);
    console.log(noun);
    console.log(villan);
    console.log(animal);
    console.log(adj);
    console.log(szn);
    console.log(weapon);
    console.log(place);
    console.log(time);
    console.log(toy);

    

    var villanMessage;

    if(villan=="pennywise"){
        villanMessage = "Your Rival Is The Killer Clown: Pennywise"
    }else if (villan=="michael"){
        villanMessage = "Your Rival Is The Boogeyman: Michael Myers"
    }else if (villan=="ghostface"){
        villanMessage = "Your Rival Is The Voice: Ghostface"
    }else if (villan=="jason"){
        villanMessage = "Your Rival Is Friday The 13's: Jason Voorhees"
    }
    console.log(villanMessage);

    document.getElementById('output1').innerHTML = "I Know What You Did Last " +szn;
    document.getElementById('output2').innerHTML = "Attack of the Killer " +fruit;
    document.getElementById('output3').innerHTML = "Killer " +animal+ " From Outer Space";
    document.getElementById('output4').innerHTML = "28 " +noun+ " Later";
    document.getElementById('output5').innerHTML = time+ " of the Living Dead";
    document.getElementById('output6').innerHTML = "A " +adj+ " Place";
    document.getElementById('output7').innerHTML = "I Saw The "+toy+ " Glow";
    document.getElementById('output8').innerHTML = "Tales from the " +place;
    document.getElementById('output9').innerHTML = "Texas " +weapon+ " Massacre";
    document.getElementById('output10').innerHTML = "You Are A Horror Villan! If You Had A Crossover "+villanMessage;
}