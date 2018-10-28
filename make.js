function make(...args) {
    let currentSum = args;
    function f(b) {
        for (let i = 0; i < arguments.length; i++) {
            let n = arguments[i];
            if(typeof(n) === 'function')  {
                return currentSum.reduce(n);
            } else  {
                currentSum.push(n); 
            }    
        } 
        return f;
    } 
    return f;
} 
