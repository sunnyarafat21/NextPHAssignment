**Concept : What are some differences between interfaces and types in TypeScript?**

# 1. Extending and Merging

        a. interface supports declaration merging and extension multiple times.
        b. type does not merge on re-declaration but supports intersections.

                interface A { x: number }
                interface A { y: number } // merged

                type B = { x: number }
                // type B = { y: number } // Error: duplicate identifier

# 2. Use with Primitives, Unions, and Tuples.

        a. type can define primitives, unions, intersections, and tuples.
        b. interface is only for object shapes.

                type ID = string | number;
                type Point = [number, number];

# 3. Implements in Classes

        a. interface is preferred for defining contracts that classes must implement.

                interface Printable {
                print(): void;
                }

                class Report implements Printable {
                print() {
                    console.log("Printing...");
                }
                }

# Type vs Interface Characteristics :

            Use **interface** for defining structured object shapes or class contracts.
            Use **type** for more flexible constructs like unions, primitives, tuples, and advanced composition.

**What is Type Inference in TypeScript?**

        Type inference is TypeScript’s ability to automatically deduce the type of a variable, parameter, or return value without explicit annotations.

                let name = "Alice"; // inferred as string
                let age = 30;       // inferred as number

                function add(a: number, b: number) {
                return a + b;     // return type inferred as number
                }

Comment : You didn’t write : string or : number — TypeScript

# Why Is It Helpful?

1. Less Boilerplate Code
   No need to manually write types for everything — cleaner and faster code.

2. Smart Error Detection
   TypeScript still catches errors even when you don’t annotate types.

3. Improved Autocompletion
   Editors like VSCode show accurate suggestions and warnings thanks to inference.

4. Encourages Clean API Design
   When functions and variables are clear and predictable, TypeScript fills in the gaps reliably.
