console.log("this is tut 47");

let regex=/arry/g;
let str="harry is a good boy and harry is cose with hadrry";

let result=regex.exec(str);
console.log(result);

if(regex.test(str))
{
    console.log(`matches the expression ${str}`);
}
else{
    console.log(`${str} doesnt match`);
}

//console.log(regex.source);

//metacharacter symbols
//1)^[carat]:--means expression will match if string starts with given string

regex =/^harry/;
console.log(regex.test(str));

//2) $ [endswith]
regex=/harry$/g;
let result1=regex.exec(str);
//console.log(result1.index);

//3 dot operator
regex=/h.rry/;
console.log(str.match(regex))

//regex=/h*rry/ ....>matches 0 to infinity charachters between
regex=/ha?rryj/;

