console.log("this is tut48");
//const regex=/h[gvhvhgz]rry/i;
const regex=/h[a-z]/i;
let str="harry means codewith";

let result=regex.exec(str);
console.log("the result from exec is",result)

if(regex.test(str))
{
    console.log(`the string ${str} matches the expression ${regex.source}`);

}
else{
    console.log("does not matches");
}