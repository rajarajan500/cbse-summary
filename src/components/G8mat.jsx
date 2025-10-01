import React from "react";
import { Link } from "react-router-dom";

function G8mat() {
  return (
    <div>
      <div className="border p-3 text-2xl">
        <h1>MATHEMATICS CBSE BOOK SUMMARY (Chapter wise): </h1>
      </div>
      <div className="p-5 text-lg flex flex-col gap-4">
        <h1 className="text-center">Mathematics – Class 8 CBSE</h1>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 1: Rational Numbers:
        </h1>
        <h2>
          This chapter introduces rational numbers and their properties. You
          learn how to represent them on a number line, perform operations like
          addition, subtraction, multiplication, and division, and understand
          concepts like additive and multiplicative identity. The chapter also
          covers closure, commutativity, associativity, and distributivity of
          operations.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 2: Linear Equations in One Variable:
        </h1>
        <h2>
          You learn how to solve equations involving one variable, including
          those with brackets and variables on both sides. The chapter explains
          how to form equations from word problems and solve them step-by-step
          using balancing methods and transposition.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 3: Understanding Quadrilaterals:
        </h1>
        <h2>
          This chapter explores different types of quadrilaterals and their
          properties. You learn about angles, diagonals, and classifications
          like parallelograms, trapeziums, rhombuses, and rectangles. It also
          introduces the concept of polygons and their angle sums.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 4: Practical Geometry:
        </h1>
        <h2>
          You learn how to construct quadrilaterals using given measurements
          such as sides, angles, and diagonals. The chapter provides
          step-by-step geometric constructions using a compass and ruler,
          reinforcing your understanding of shapes and their properties.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 5: Data Handling:
        </h1>
        <h2>
          This chapter teaches you how to organize and interpret data using bar
          graphs, pie charts, and histograms. You also learn about probability
          and how to calculate chances of events occurring using simple
          experiments and observations.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 6: Square and Square Roots:
        </h1>
        <h2>
          You explore the concept of perfect squares and how to find square
          roots using prime factorization and division methods. The chapter also
          covers properties of squares and shortcuts for estimating square
          roots.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 7: Cube and Cube Roots:
        </h1>
        <h2>
          This chapter introduces cubes and cube roots. You learn how to
          identify perfect cubes, find cube roots using prime factorization, and
          understand the relationship between volume and cube numbers.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 8: Comparing Quantities:
        </h1>
        <h2>
          You learn how to compare quantities using percentages, ratios, and
          proportions. The chapter covers profit and loss, discount, simple
          interest, and compound interest, helping you apply math in real-life
          financial situations.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 9: Algebraic Expressions and Identities:
        </h1>
        <h2>
          This chapter teaches you how to form and simplify algebraic
          expressions. You learn about terms, coefficients, and identities like
          (a + b)² and (a − b)². It also covers multiplication of expressions
          and using identities to simplify calculations.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 10: Visualising Solid Shapes:
        </h1>
        <h2>
          You explore 3D shapes and their representations. The chapter
          introduces views like front, top, and side, and concepts like nets,
          edges, faces, and vertices. It helps you visualize geometry beyond
          flat surfaces.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 11: Mensuration:
        </h1>
        <h2>
          This chapter covers surface area and volume of solids like cubes,
          cuboids, and cylinders. You learn formulas and apply them to solve
          problems involving real-world measurements and packaging.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 12: Exponents and Powers:
        </h1>
        <h2>
          You learn the laws of exponents and how to simplify expressions using
          powers. The chapter introduces scientific notation and helps you
          handle very large or very small numbers efficiently.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 13: Direct and Inverse Proportions:
        </h1>
        <h2>
          This chapter explains how quantities change in relation to each other.
          You learn how to identify and solve problems involving direct and
          inverse proportions using tables and equations.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 14: Factorisation:
        </h1>
        <h2>
          You learn how to factor algebraic expressions using common factors,
          identities, and grouping methods. The chapter also covers division of
          algebraic expressions and solving equations using factorisation.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 15: Introduction to Graphs:
        </h1>
        <h2>
          This chapter introduces coordinate geometry and graph plotting. You
          learn how to read and draw line graphs, bar graphs, and pie charts,
          and how to interpret data using coordinates.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 16: Playing with Numbers:
        </h1>
        <h2>
          You explore number patterns, divisibility rules, and tricks with
          numbers. The chapter encourages logical thinking and helps you
          understand how numbers behave in different situations.
        </h2>
      </div>
      <div className="p-5  gap">
        <a
          className="text-blue-500 hover:underline"
          href="https://ncert.nic.in/textbook.php?hemh1=0"
        >
          Mathematics book [PDF] ,
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

export default G8mat;
