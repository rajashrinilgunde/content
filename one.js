document.write("this id tut 460");
let reg = /harry/g;
//let reg=/harry/i   ...........>for case insensitive
document.write(reg.source);

//functions to match express
let s = "this is a harry,GREAT harry ";
//1)exec()-this function will return an array for match or null for no match;

let result = reg.exec(s);
console.log(result);
//console.log(result.index);

//2)test()   ....>test function
let result1 = reg.test(s);   //...>testing whether mug present in string or not
console.log(result1);

//3)match()   ....>match function ,it will return array of results or null

let result2=s.match(reg)
console.log(result2);
//console.log(result2[0]);

//4)search()  ...>return index of first match else -1
let result3=s.search(reg);
console.log(result3);

//5)replace()  ...>returns new replaces string with all the replacements
let result5=s.replace(reg,"shubham");
console.log(result5);