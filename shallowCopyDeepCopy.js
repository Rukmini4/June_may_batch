

var color = ['red','blue','orange','black'];
var color2 = color;//color and color2 array is pointing to the memory location
console.log('color' , color);
console.log('color2',color2);

//shallow copy : if we changing items from copied array the changes will reflect to the original array  as well 
//let a = [10,20,30];
//a[1] = 60;
//console.log(a);

color2[2] = 'pink'
console.log('color2',color2);
console.log('color',color);

//deep copy: original array/object item will not get affected if we change item of cpoied array/obj
let car1 = ['swift','mini cup','audi','jaguar']; //memory location of car1 and car2 is different in deep copy
let car2 = [...car1];
console.log('car1',car1);
console.log('car2',car2);
car2[0]='poonam'
console.log('car1',car1);
console.log('car2',car2);



//shallow copy of object
let carDetails1 = {
    carName : "Swift",
    color: "white",
    price:800000,
    tpermite: true
}

let carDetails2 = carDetails1;
console.log('carDetails1' , carDetails1);
console.log('cardetails2',carDetails2);

carDetails2.price = 900000;

console.log('carDetails1',carDetails1);
console.log('carDetails2',carDetails2);

let carDetails3 = { 
    carName : "Swift",
    color: "white",
    price: 800000,
    tpermite: true
}

///deep copy of obj :spread / json
let carDetails4 = {...carDetails3 };
console.log('carDetails3',carDetails3);
console.log('carDetails4',carDetails4);

carDetails4.color = 'Black'
console.log('carDetails3',carDetails3);
console.log('carDetails4',carDetails4);

//using jsonparse and stringfy

//json stringfy :
let student = '{"stdName" : "pooja", "age":20}'; //stringifyed json formate
let student2 = {name:'pooja',age:20} //json parsed formate
//JSON : javascript data interchange formate 
//when we transfering data from front end to backed 
//or getting data from backend to frontend it should be in jsin format
//JSON:

let emp = {
    empName : 'saurabh',
    epFriends : ['sanchit','pavan','ram','radha'],
    empyCar :[
        {carName: 'Audi',color:'black'},
        {carname: 'Audi',color:'pink'},
        {carname: 'Audi',color:'white'}
    ],
    empAddress : {city:'mumbai',pinCode:41020}

}


let carDetails7 = { 
    carName : "Swift",
    color: "white",
    price: 800000,
    tpermite: true
} 

let stringiFyed_obj = JSON.stringify(carDetails7); //socket ApI darta should gp and come in stringify formate
console.log('stringifyed_obj',stringiFyed_obj);
console.log(stringiFyed_obj.carName);

let parsedData = JSON.parse(stringiFyed_obj)
console.log(parsedData);
console.log(parsedData.carName);