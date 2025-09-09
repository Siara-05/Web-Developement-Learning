# 📚 TypeScript Types Basics

A comprehensive guide to understanding TypeScript's type system.  
This repository covers fundamental types and type concepts in TypeScript, perfect for beginners and developers aiming to strengthen their understanding of static typing in JavaScript.

---

## ✅ Table of Contents

- [Primitive Types](#primitive-types)  
- [Array Types](#array-types)  
- [Any, Unknown, and Never](#any-unknown-and-never)  
- [Type Aliases](#type-aliases)  
- [Union and Intersection Types](#union-and-intersection-types)  
- [Functions](#functions)  
- [Objects](#objects)  
- [Type Assertions](#type-assertions)  
- [Optional and Readonly Properties](#optional-and-readonly-properties)  
- [Enums](#enums)  
- [Generics](#generics)  
- [Getting Started](#getting-started)  
- [Resources](#resources)  
- [License](#license)  

---

## ✅ Primitive Types

```ts
// String
let name: string = "John";

// Number
let age: number = 30;
let price: number = 19.99;

// Boolean
let isActive: boolean = true;

// Null and Undefined
let nothing: null = null;
let notDefined: undefined = undefined;

// Symbol (ES6 feature)
let sym: symbol = Symbol("unique");
```
✅ Array Types

```
// Square bracket syntax
let numbers: number[] = [1, 2, 3];
let names: string[] = ["John", "Jane"];

// Generic Array syntax
let nums: Array<number> = [4, 5, 6];
let strs: Array<string> = ["Alice", "Bob"];

// Multi-dimensional arrays
let matrix: number[][] = [
  [1, 2],
  [3, 4]
];
```


✅ Any, Unknown, and Never
```
// Any - opt-out of type checking (use sparingly)
let flexible: any = "Hello";
flexible = 42;

// Unknown - type-safe counterpart of any
let notSure: unknown = "maybe";
if (typeof notSure === "string") {
  console.log(notSure.length);
}

// Never - for functions that never return
function throwError(msg: string): never {
  throw new Error(msg);
}
```


✅ Type Aliases
```
type ID = string | number;

type User = {
  id: ID;
  name: string;
  email: string;
  age?: number;
};

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com"
};

```


✅ Union & Intersection Types

```
// Union type
let value: string | number;
value = "hello";
value = 42;

// Intersection type
type Employee = { name: string; id: number };
type Manager = { department: string; employees: Employee[] };
type ManagerEmployee = Employee & Manager;

const manager: ManagerEmployee = {
  name: "Jane",
  id: 101,
  department: "Engineering",
  employees: []
};
```


✅ Functions
```
function add(x: number, y: number): number {
  return x + y;
}

const multiply = (x: number, y: number): number => x * y;

function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}

function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}
```

✅ Objects

```
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

class Employee implements Person {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}
```


✅ Type Assertions

```
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

✅ Optional & Readonly Properties

```
interface Config {
  readonly id: number;
  name: string;
  url?: string;
}

const config: Config = { id: 1, name: "Production" };
```


✅ Enums

```
enum Direction {
  North,
  East,
  South,
  West
}

enum FileType {
  JSON = "JSON",
  CSV = "CSV"
}
```


✅ Generics

```
function identity<T>(arg: T): T {
  return arg;
}

interface Box<T> {
  value: T;
}

class Queue<T> {
  private data: T[] = [];
  
  push(item: T) {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.shift();
  }
}

```


✅ Getting Started

Install TypeScript globally
```
npm install -g typescript
```

Create a .ts file and write your code.

Compile with
```
tsc filename.ts
```


Run the compiled JavaScript
```
node filename.js
```


👉 Or use the TypeScript Playground
.
