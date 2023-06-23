const accountID = 54154
let accountEmail = "md.sharik5012@gmail.com"
var accountPassword = "123456"
comment = "Coding is life"
let accountState;
/* this is comment:java script without assinging variable
 like "Let" or "var" a variable can be assigned like in comment
 but it is not a prefered always use variable syntax.
*/


/*
 Prefer not to use var :
 because it creates issues for block Scopes and functional scopes!

*/


accountEmail  = "gg!"
accountPassword = "get a life!"

console.log(accountPassword);
console.log(accountEmail);

console.table([accountEmail, accountID, accountPassword, comment, accountState])