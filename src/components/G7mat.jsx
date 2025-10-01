import React from "react";
import { Link } from "react-router-dom";

function G7mat() {
  return (
    <div>
      <div className="border p-3 text-2xl">
        <h1>MATHEMATICS CBSE BOOK SUMMARY (Chapter wise): </h1>
      </div>
      <div className="p-5 text-lg flex flex-col gap-4">
        <h1 className="text-xl font-bold flex flex-col">
          Chapter 1: Large Numbers Around Us:
        </h1>
        <h2>
          This chapter builds on your understanding of numbers by introducing
          even larger figures used in real life—like population, distances
          between planets, and national budgets. You learn how to read, write,
          and compare large numbers, and how to use them in practical contexts
          like estimating costs or interpreting data. It also introduces the
          Indian and International number systems and how place values shift
          across them.
        </h2>
        <h1 className="text-xl font-bold flex flex-col">
          Chapter2: Arithmetic Expression:
        </h1>
        <h2>
          Here, you explore how numbers and operations can be written as
          expressions. You learn to simplify expressions using the correct order
          of operations—BODMAS—and how brackets affect calculations. The chapter
          also shows how expressions are used in everyday situations, like
          calculating bills or solving puzzles, helping you develop logical
          thinking.
        </h2>
        <h1 className="text-xl font-bold flex flex-col">
          Chapter 3: A Peek Beyond the Point :
        </h1>
        <h2>
          This chapter introduces decimals in depth. You learn how to compare,
          add, subtract, multiply, and divide decimal numbers. It explains how
          decimals are used in money, measurements, and scientific data. The
          chapter also helps you understand place values after the decimal point
          and how rounding works.
        </h2>
        <h1 className="text-xl font-bold flex flex-col">
          Chapter 4: Expressions Using Letter-Numbers:
        </h1>
        <h2>
          This is your introduction to algebra. You learn how letters can
          represent unknown numbers and how to form expressions using variables.
          The chapter explains how to substitute values, simplify expressions,
          and understand basic algebraic rules. It sets the foundation for
          solving equations and understanding patterns.
        </h2>
        <h1 className="text-xl font-bold flex flex-col">
          Chapter 5: Parallel and Intersecting Lines:
        </h1>
        <h2>
          This geometry chapter explores lines and angles. You learn how to
          identify parallel lines, intersecting lines, and angles formed between
          them. It introduces concepts like vertically opposite angles, adjacent
          angles, and angle pairs. You also understand how these ideas apply to
          real-world structures like roads and buildings.
        </h2>
        <h1 className="text-xl font-bold flex flex-col">
          Chapter 6: Number Play:
        </h1>
        <h2>
          This chapter is all about patterns and tricks with numbers. You
          explore divisibility rules, prime and composite numbers, and
          factorization. It introduces the concept of HCF and LCM and how
          they’re used in solving problems involving time, distance, and
          grouping. The chapter also includes puzzles and games to make number
          theory fun.
        </h2>
        <h1 className="text-xl font-bold flex flex-col">
          Chapter 7: A Tale of Three Intersecting Lines:
        </h1>
        <h2>
          Here, you dive deeper into geometry by studying triangles and their
          properties. You learn about types of triangles based on sides and
          angles, and how to measure and construct them. The chapter also
          introduces the concept of congruence and how triangles are used in
          design and architecture.
        </h2>
        <h1 className="text-xl font-bold flex flex-col">
          Chapter 8: Working with Fractions:
        </h1>
        <h2>
          This chapter focuses on fractions and their operations. You learn how
          to add, subtract, multiply, and divide fractions, and how to simplify
          them. It explains how fractions are used in recipes, sharing, and
          measurements. You also explore equivalent fractions and how to convert
          between mixed and improper forms.
        </h2>
      </div>
      <div className="p-5  gap">
        <a
          className="text-blue-500 hover:underline"
          href="https://ncert.nic.in/pdf/publication/textbooks/emhm101.pdf"
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

export default G7mat;
