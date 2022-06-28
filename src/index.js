module.exports = function reverse (n) {

let strN = null;

if (n < 0) {
 n *= -1; 
 strN = String(n);  
 return strN.split('').reverse().join('');
} else {
    strN = String(n);  
    return strN.split('').reverse().join('');
}

}


