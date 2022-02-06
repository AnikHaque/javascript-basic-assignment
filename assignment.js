// problem 01
function anaToVori(ana){
    // error case
    if (typeof ana != 'number') {
    return 'This is not a valid input'
    }
    var onevori = 0.0625;
    // calculating ana to vori
    var vori = onevori * ana;
    return vori;
    }
    var calculatevori = anaToVori(32);
    console.log(calculatevori);
    // problem 02
    function pandaCost(shingaraQuantity, shomuchaQuantity, jilapiQuantity){
    // error message
    if( typeof shingaraQuantity == 'string' || typeof shomuchaQuantity == 'string' || typeof jilapiQuantity =='string'){
    return 'Cost cannot be a string';
    }
    // single product price
    var shingaraprice = 7;
    var shomuchaprice = 10;
    var jilapiprice = 15;
    // product price with quantity
    var shingarapricequantity= shingaraprice * shingaraQuantity;
    var shomuchapricequantity= shomuchaprice * shomuchaQuantity;
    var jilapipricequantity= jilapiprice * jilapiQuantity;
    // total sales of all products
    var total = shingarapricequantity + shomuchapricequantity + jilapipricequantity;
    return total;
    }
    var totalprice=pandaCost(2,2,2);
    console.log(totalprice);
    // problem 03
    function picnicBudget(person){
    //error case
    if(person < 0){
    return 'Input cannot be negative number';
    }
    // conditions
    if(person <= 100){
    return person * 5000;
    }
    else if(person > 100 && person <= 200){
    return 100 * 5000 + (person - 100) * 4000;
    }
    else{
    return 100 * 5000 + 100 * 4000 + (person - 200) * 3000;;
    }
    }
    var total = picnicBudget(201);
    console.log(total);
    // problem 04
    function oddFriend(name) {
    // error message
    if (typeof name !='object') {
    return 'invalid input';
    }
    // conditions
    for (let i = 0; i < name.length; i++) {
    var totalFriend = name[i];
    if (totalFriend.length %2 ==1) {
    return totalFriend;
    }
    }
    }
    const myoddfriendname = ['anik','anika','saiful'];
    const closefirend = oddFriend(myoddfriendname);
    console.log(closefirend);