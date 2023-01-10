//1.
let num=(a)=>console.log(a);
num(5);

//2.
number1=(b)=>{
    return b;
}
console.log(number1(6));

//3.
add=(c,d)=>{
    let e=c+d;
    console.log(e);
}
add(6,7);

//4.
assume=(a=18)=>console.log(a);
assume();

//5.
add1=(a,b,c,d)=>{
    let e=a+b+c+d;
    console.log(e);
}
add1(5,3,9,2);

//6.
sum=(a=10,b=5,c=18)=> a-b+c;
console.log(sum());

//7.
sum1=(a,b,c,d,e)=> (a+b)*2+(c-d+e)/2;
console.log(sum1(12,5,3,7,2));

//8.
sub=(a)=>10+a;
console.log(sub(5));

//9.
sum2=(a,b,c)=> (a)/2* b**2 +c*2;
console.log(sum2(10,6,8));

//10.
num2=(x=18)=>console.log(x);
num2(undefined);
