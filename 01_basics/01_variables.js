const accountId = 144536
let accountEmail= "aka642@gmail.com"
var accountPassword ="23456"
accountCity ="West Bengal"
let accountState;

/*we dont use var 
because there's an issue in block scope
and functional scope
*/
//accountId=2 //not allowed
console.log(accountId);
console.table([accountId, accountEmail,accountPassword,accountCity,accountState])