

// console.log(fact(4))
// console.log(fact(3))

function memoize(){
    let cache = {}

    return function(n){
        if(cache[n])return cache[n]

        function fact(n){
            let ans=1;
            console.log("fact is invoked for ",n)
            for(let i=1;i<=n;i++){
                ans*=i;
                cache[i]=ans;
            }
            return ans;
        }

        let ans = fact(n)
        return ans;
    }
}

let x =memoize()

console.log(x(5))
console.log(x(4))