module.exports = function reverse (n) {
    //let num = toString(n);
    //let arr = num.split('');
    //let rev = arr.reverse(); 
    //let strN = rev.join('');
    //return strN;
    return parseInt(n.toString().split('').reverse().join(''));
}
