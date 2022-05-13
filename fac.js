let num = 5
let result = fac(num)
function fac(n)
{
 if(n===0)
        return 1;
    else
        return n * fac(n-1);
}

console.log(result)