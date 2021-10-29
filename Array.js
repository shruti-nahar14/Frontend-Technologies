const array=[1,2,3,4,5,6,7,8,9];
console.log(array);
console.log("Access the element of any position"+array[2]);
console.log("Last element of the array "+array[array.length-1]);

console.log("push the element "+array.push(10));
console.log("pop the element "+array.pop());

const names=['Amal','Dhavan','Akash','Akshit','shruti','Akash'];
console.log("Index of the element "+names.indexOf('Akash'));
console.log("Last index of the element "+names.lastIndexOf('Akash'));

console.log("Search the element "+names.includes('Akshit'));

const names1=['shubham','shruti','lodha'];
const concatarr=names.concat(names1);
console.log("After concatenation "+concatarr);

console.log("slice "+concatarr.slice(3,5));

let names3=[...names,...names1];
console.log("joing array "+names3);

for(let i=0;i<names.length;i++)
{
   console.log(names[i]);
}

for(let value of names1)
{
    console.log(value);
}

names3.forEach(function(name,index)
{
    console.log(name,index);
});

let student=['s','h','r','u','t','i'];
console.log(student.join('-'));

let channels=[
    {
        name:'shruti',
        subscriber:100000
    },
    {
        name:'shubham',
        subscriber:2000000
    },
    {
        name:'prachi',
        subscriber:300000
    },
    {
      name:'sheetal',
      subscriber:250000
    }
];
console.log("find method");
console.log(channels.find(function(element)
{
    return element.subscriber=2000000;
}));
console.log("filter method");
console.log(channels.filter(element =>
{
    return element => element.subscriber<20000000;
}));
console.log("map method ");
const arr=[1,2,4,6,8];
const map1=arr.map(x=>x*2);//arrow fun
console.log(map1);

