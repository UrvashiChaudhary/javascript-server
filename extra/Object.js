//Object.assign()

const target = {a:1, b:2, c:4};
const source= {a:4, b:10};
//const source2 = {a=10, b=11,c =14}

const returnTarget = Object.assign(target,source);
console.log(target);
console.log(returnTarget);



//Object.create()

const school={
    isStudent: false,
    isTeacher: true,
    Who : function(){

    console.log(`My name is ${this.name}. Am I teacher? ${this.isTeacher}. Am I student? ${this.isStudent}` )
    }
};
const check= Object.create(school);
check.name="Yuvraj";
check.isTeacher=false;
check.isStudent=true;
check.Who();



//Object.defineProperties()

const Obj={}

Object.defineProperties(Obj,{
    Property1:{
    value: 170,
    //value: 32,
    writable: true
},
Property2:{}
});
console.log(Obj.Property1);


//Object.defineProperty()
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 170,
  writable: false
});
object1.property1 = 171;
console.log(object1.property1);



//Object.entries()
const obj= {
    a: 'Urvashi',
    b: 170
};
for(const[key,value] of Object.entries(obj)){
    console.log( `${key}: ${value}`);
}



//Object.freeze()
//Object.isFrozen()
const checkFreeze={
    value:110
};
Object.freeze(checkFreeze);
checkFreeze.value=170;  
console.log(checkFreeze.value);
console.log(Object.isFrozen(checkFreeze));

//Object.fromEnteries
const Game=[['0','a'],['1','b'],['2','c']];
const ob= Object.fromEntries(Game);
console.log(ob);


//Object.getOwnPropertyDescriptor()

const object2 = {
    property1: 2020
};
  
const descriptor1 = Object.getOwnPropertyDescriptor(object2, 'property1');  
console.log(descriptor1.configurable);
console.log(descriptor1.value);


//Object.getOwnPropertyDescriptors()
const object3 = {
    property1: 10
};
const descriptors1 = Object.getOwnPropertyDescriptors(object3);
console.log(descriptors1.property1.writable);
console.log(descriptors1.property1.value);


//Object.getOwnPropertyNames()
const object4 = {
    a: 1,
    b: 2,
    c: 3
};
console.log(Object.getOwnPropertyNames(object4));

//Object.getOwnPropertySymbols()
const object5 = {};
const a = Symbol('a');
const b = Symbol.for('b');

object5[a] = 'localSymbol';
object5[b] = 'globalSymbol';
const objectSymbols = Object.getOwnPropertySymbols(object1);
console.log(objectSymbols.length);
console.log(objectSymbols);


//Object.getPrototypeOf()
const prototype1 = {};
const object6 = Object.create(prototype1);
console.log(Object.getPrototypeOf(object6) === prototype1);


//Object.is()
let a1=2;
let b1=3;
console.log(Object.is(a1,b1));


//Object.isExtensible()
const object7 = {};
console.log(Object.isExtensible(object7));
Object.preventExtensions(object1);
console.log(Object.isExtensible(object7));

//Object.isSealed()
const object8 = {
    property1: 42
  };
console.log(Object.isSealed(object8));
Object.seal(object1);
console.log(Object.isSealed(object1));

