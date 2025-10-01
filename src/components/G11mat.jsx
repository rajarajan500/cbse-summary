import React from "react";
import { Link } from "react-router-dom";

function G11mat() {
  return (
    <div>
      <div className="border p-3 text-2xl">
        <h1>MATH CBSE BOOK SUMMARY (Chapter wise): </h1>
      </div>
      <div className="p-5 text-lg flex flex-col gap-4">
        <h1 className="text-center">Mathematics – Class 11 CBSE</h1>

        <h1 className="text-xl font-bold flex flex-col">Chapter 1: Sets:</h1>
        <h2>
          This chapter introduces the concept of sets, their representation, and
          types—finite, infinite, empty, singleton. You learn about Venn
          diagrams, operations like union, intersection, and difference, and the
          concept of subsets and power sets.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 2: Relations and Functions:
        </h1>
        <h2>
          You study ordered pairs, Cartesian products, and how relations link
          elements of two sets. The chapter introduces functions, domain, range,
          and types like one-one, onto, and constant functions.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 3: Trigonometric Functions:
        </h1>
        <h2>
          This chapter explores angles in radians and degrees, trigonometric
          identities, and graphs. You learn how to solve equations and
          understand periodicity, symmetry, and transformations of trigonometric
          functions.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 4: Principle of Mathematical Induction:
        </h1>
        <h2>
          You learn how to prove statements for all natural numbers using
          induction. The chapter explains the base case, inductive step, and how
          this principle establishes mathematical truths.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 5: Complex Numbers and Quadratic Equations:
        </h1>
        <h2>
          This chapter introduces imaginary numbers and the concept of complex
          numbers. You learn operations, modulus, conjugate, and how to solve
          quadratic equations with complex roots.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 6: Linear Inequalities:
        </h1>
        <h2>
          You study inequalities in one and two variables, graphical
          representation, and solution sets. The chapter helps in understanding
          constraints in real-life problems and optimization.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 7: Permutations and Combinations:
        </h1>
        <h2>
          This chapter explains counting techniques—how to arrange and select
          objects. You learn formulas for permutations and combinations, and
          apply them to solve probability and arrangement problems.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 8: Binomial Theorem:
        </h1>
        <h2>
          You explore the expansion of expressions using the binomial theorem.
          The chapter introduces Pascal’s Triangle, general term, and middle
          term, helping simplify large powers.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 9: Sequences and Series:
        </h1>
        <h2>
          This chapter covers arithmetic and geometric progressions, nth term,
          and sum formulas. You also learn about special series like sum of
          squares and cubes, and how to apply them.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 10: Straight Lines:
        </h1>
        <h2>
          You study the slope of a line, equations in various forms, and
          conditions for parallelism and perpendicularity. The chapter also
          covers distance of a point from a line and angle between lines.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 11: Conic Sections:
        </h1>
        <h2>
          This chapter introduces curves like circles, parabolas, ellipses, and
          hyperbolas. You learn their standard equations, properties, and how
          they arise from slicing a cone.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 12: Introduction to Three-Dimensional Geometry:
        </h1>
        <h2>
          You explore coordinates in 3D space, distance between points, and
          section formula. The chapter lays the foundation for spatial reasoning
          and vector geometry.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 13: Limits and Derivatives:
        </h1>
        <h2>
          This chapter introduces calculus concepts—limits and derivatives. You
          learn how functions behave near a point, and how to find rates of
          change using basic differentiation rules.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 14: Mathematical Reasoning:
        </h1>
        <h2>
          You study logic, statements, and reasoning techniques. The chapter
          covers implications, negation, and validity of arguments, helping
          develop analytical thinking.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 15: Statistics:
        </h1>
        <h2>
          This chapter focuses on measures of dispersion—range, mean deviation,
          variance, and standard deviation. You learn how to interpret data and
          compare consistency.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 16: Probability:
        </h1>
        <h2>
          You study theoretical probability, sample space, events, and rules of
          addition. The chapter builds on Class 10 concepts and prepares you for
          advanced probability in Class 12.
        </h2>
      </div>
      <div className="p-5  gap">
        <a
          className="text-blue-500 hover:underline"
          href="https://ncert.nic.in/textbook.php?kemh1=0"
        >
          Math [PDF] ,
        </a>

        <Link className="text-black-500 " to="/">
          <button className="border border-black px-4 py-2 bg-red-500/90 rounded m-4">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default G11mat;
