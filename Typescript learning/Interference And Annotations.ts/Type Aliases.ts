
// Type Aliases are similar to Interfaces, but they are more flexible.
// They can represent not just object shapes, but also unions, primitives, functions, etc.
// They merge the primitive types in one and make their own new type of primitive

type sankhya = number | null;
let ab: sankhya;

type argument = string | null;

function abcd(obj: argument) {

}
abcd("siara");
