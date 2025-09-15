"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The normal array defining.. we can include string or number or object .. it doesnt give any error
let arr = [1, 2, 3, { name: "siara" }, { name: 12 }];
// Here if we declare when defining the array that it is number.. it gives error when we write a string
// let arry: number[] = [1,2,3,4,"siara"]
// TUPLES
let arr1 = ["siara", 2.0];
// ENUMERATIONS
// these are in the key:value pair 
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "abondoned status code 500";
    StatusCodes["NOTFOUND"] = "not found status code 404";
})(StatusCodes || (StatusCodes = {}));
StatusCodes.NOTFOUND;
//# sourceMappingURL=Arrays.js.map