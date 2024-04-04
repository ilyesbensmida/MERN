// ****** 1 *****
console.log(hello);                                   
var hello = 'world';  
// // predict result : undefined      
// var hello
// console.log(hello);
// hello = 'world'; 


// ******** 2 ******
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// how the interpreter read :
// var needle  ;
// function test(){
//     needle = 'magnet';
//     console.log(needle);
// }
// needle = 'haystack'  
// test();
//  predict result :   magnet

// ****** 3 *****
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// predict result : super cool 
// var brendan ;
// how the interpreter read :
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// brendan = 'super cool'
// console.log(brendan);
//  predict result :    super cool


// ******** 4   ******
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// how the interpreter read :
// var food ;
// function eat(){
//         food = 'half-chicken';
//         console.log(food);
//         food = 'gone';
//     }
// food = 'chicken'
// console.log(food);
// eat();
// predict resul : chicken,half-chicken



// ****** 5 ****
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// how the interpreter read :
// var mean 
// mean();
// predict result : error 


// ****** 6 ******
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// how the interpreter read :
// var genre
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// genre = "disco"
// rewind();
// console.log(genre);
// predict result : undefined,rock,r&b,disco

// ******* 7 *****
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// how the interpreter read :
// function learn() {
    //     var dojo ;
    //     dojo = "seattle";
    //     console.log(dojo);
    //     dojo = "burbank";
    //     console.log(dojo);
    // }
// dojo = "san jose"
// console.log(dojo);
// learn();
// console.log(dojo);
// predict result : san jose,seattle,burbank,san jose


// ******** 8 *******

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// how the interpreter read :
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
//     }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// predict result : {name:"chicage",students:65,hiring:true},error type "we can't change a type of const or variable",






