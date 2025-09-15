
// Type Inference means TypeScript automatically figures out the type of a variable or function return based on how you use it.
// You don’t always have to manually tell TypeScript what type it is.

let a = 25;
let b = "25";
//  Above are interferences

let c: number | string | boolean;

c =25;
c = true;
c ="siara";
// These are the annotationsx