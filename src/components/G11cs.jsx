import React from "react";
import { Link } from "react-router-dom";

function G11cs() {
  return (
    <div>
      <div className="border p-3 text-2xl">
        <h1>COMPUTER SCIENCE CBSE BOOK SUMMARY (Chapter wise): </h1>
      </div>
      <div className="p-5 text-lg flex flex-col gap-4">
        <h1 className="text-center">
          Computer Science – Class 11 CBSE (Python – Sumita Arora)
        </h1>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 1: Computer Fundamentals
        </h1>
        <h2>
          Introduces the basics of computing—hardware, software, memory units,
          and number systems. You learn about input/output devices, types of
          software (system vs application), and the evolution of computers. It
          also covers binary, octal, decimal, and hexadecimal conversions.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 2: Software Concepts
        </h1>
        <h2>
          Explains system software (OS, compilers, interpreters) and application
          software. You understand the role of translators, utility programs,
          and the difference between proprietary and open-source software.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 3: Boolean Logic
        </h1>
        <h2>
          Introduces logic gates—AND, OR, NOT—and truth tables. You learn how to
          simplify expressions using Boolean algebra and apply logic to circuit
          design and decision-making.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 4: Introduction to Python
        </h1>
        <h2>
          Covers Python installation, IDEs, and basic syntax. You learn about
          variables, keywords, indentation, and writing your first Python
          program using `print()` and simple arithmetic.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 5: Data Types and Variables
        </h1>
        <h2>
          Explains Python’s data types—int, float, str, bool—and how to declare
          and use variables. You learn type conversion, input/output functions,
          and memory management.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 6: Operators and Expressions
        </h1>
        <h2>
          Covers arithmetic, relational, logical, assignment, and bitwise
          operators. You learn operator precedence and how to build expressions
          for decision-making.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 7: Conditional Statements
        </h1>
        <h2>
          Introduces `if`, `if-else`, and `if-elif-else` constructs. You learn
          how to control program flow based on conditions and use nested
          decisions for complex logic.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 8: Iterative Statements
        </h1>
        <h2>
          Covers loops—`while` and `for`—with examples. You learn how to use
          `break`, `continue`, and `else` with loops, and how to iterate over
          ranges and collections.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 9: Strings in Python
        </h1>
        <h2>
          Explains string creation, indexing, slicing, and built-in methods like
          `upper()`, `lower()`, `find()`, and `replace()`. You learn string
          formatting and immutability.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 10: Lists and Tuples
        </h1>
        <h2>
          Introduces lists (mutable) and tuples (immutable). You learn indexing,
          slicing, nesting, and methods like `append()`, `pop()`, and `sort()`.
          Tuples are used for fixed collections.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 11: Dictionaries
        </h1>
        <h2>
          Explains key-value pairs, creation, access, and methods like `get()`,
          `update()`, and `items()`. You learn how dictionaries are used for
          fast lookup and structured data.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 12: Functions
        </h1>
        <h2>
          Covers defining functions using `def`, parameters, return values, and
          scope. You learn recursion, default arguments, and how to modularize
          code.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 13: File Handling
        </h1>
        <h2>
          Introduces reading and writing text files using `open()`, `read()`,
          `write()`, and `close()`. You learn file modes (`r`, `w`, `a`) and
          exception handling.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 14: Recursion and Debugging
        </h1>
        <h2>
          Explains recursive functions and how to trace them. You learn
          debugging techniques, error types (syntax, runtime, logical), and how
          to use `try-except` blocks.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 15: Data Handling with Pandas (optional in some schools)
        </h1>
        <h2>
          Introduces Pandas library—Series and DataFrames. You learn how to
          import data, perform operations, and analyze tabular datasets.
        </h2>
      </div>
      <div className="p-5  gap">


        <Link className="text-black-500 " to="/">
          <button className="border border-black px-4 py-2 bg-red-500/90 rounded m-4">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default G11cs;
