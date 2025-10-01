import React from "react";
import { Link } from "react-router-dom";

function G10mat() {
  return (
    <div>
      <div className="border p-3 text-2xl">
        <h1>MATH CBSE BOOK SUMMARY (Chapter wise): </h1>
      </div>
      <div className="p-5 text-lg flex flex-col gap-4">
        <h1 className="text-center">Mathematics – Class 10 CBSE</h1>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 1: Real Numbers:
        </h1>
        <h2>
          This chapter builds on number systems and introduces Euclid’s Division
          Lemma. You learn about the Fundamental Theorem of Arithmetic, prime
          factorization, and how to find HCF and LCM using prime powers. It also
          explores properties of rational and irrational numbers.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 2: Polynomials:
        </h1>
        <h2>
          You study polynomial degrees, zeroes, and the relationship between
          zeroes and coefficients. The chapter covers quadratic and cubic
          polynomials, factorization, and graphical interpretation of roots.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 3: Pair of Linear Equations in Two Variables:
        </h1>
        <h2>
          This chapter teaches how to solve two-variable linear equations using
          graphical, substitution, elimination, and cross-multiplication
          methods. You learn how to interpret solutions—unique, infinite, or no
          solution—and apply them to real-life problems.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 4: Quadratic Equations:
        </h1>
        <h2>
          You explore equations of the form ax² + bx + c = 0. The chapter
          explains how to solve them using factorization, completing the square,
          and the quadratic formula. It also covers nature of roots and
          real-world applications.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 5: Arithmetic Progressions:
        </h1>
        <h2>
          This chapter introduces sequences where the difference between terms
          is constant. You learn formulas for the nth term and sum of n terms,
          and apply them to solve problems involving patterns and series.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 6: Triangles:
        </h1>
        <h2>
          You study similarity and congruence of triangles. The chapter covers
          criteria like AA, SSS, and SAS, and explains the Pythagoras Theorem
          and its converse. It emphasizes proportionality and geometric
          reasoning.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 7: Coordinate Geometry:
        </h1>
        <h2>
          This chapter focuses on distance formula, section formula, and area of
          a triangle using coordinates. You learn how to apply algebra to
          geometry and solve problems involving points and shapes on the
          Cartesian plane.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 8: Introduction to Trigonometry:
        </h1>
        <h2>
          You explore trigonometric ratios—sine, cosine, tangent—and their
          relationships. The chapter explains how to calculate ratios for
          standard angles and introduces identities used in solving geometric
          problems.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 9: Some Applications of Trigonometry:
        </h1>
        <h2>
          This chapter applies trigonometry to real-life situations like
          measuring heights and distances. You learn how to use angles of
          elevation and depression to solve practical problems.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 10: Circles:
        </h1>
        <h2>
          You study tangents and secants to a circle. The chapter explains
          properties of tangents, number of tangents from a point, and how to
          apply these concepts in geometric constructions and proofs.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 11: Constructions:
        </h1>
        <h2>
          This chapter teaches how to divide a line segment, construct tangents
          to a circle, and build triangles with given conditions using ruler and
          compass. It emphasizes precision and geometric logic.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 12: Areas Related to Circles:
        </h1>
        <h2>
          You learn how to calculate the area and perimeter of circles, sectors,
          and segments. The chapter applies π-based formulas to solve problems
          involving circular shapes in real life.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 13: Surface Areas and Volumes:
        </h1>
        <h2>
          This chapter covers surface area and volume of 3D shapes—cubes,
          cuboids, cylinders, cones, spheres, and combinations. You apply
          formulas to solve practical problems involving capacity and covering.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 14: Statistics:
        </h1>
        <h2>
          You study data representation and analysis. The chapter explains mean,
          median, mode, and graphical methods like histograms and cumulative
          frequency curves. It helps interpret real-world data effectively.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 15: Probability:
        </h1>
        <h2>
          This chapter introduces theoretical probability. You learn how to
          calculate the likelihood of events using simple experiments like
          tossing coins, rolling dice, and drawing cards. It emphasizes fairness
          and prediction.
        </h2>
      </div>
      <div className="p-5  gap">
        <a
          className="text-blue-500 hover:underline"
          href="https://ncert.nic.in/textbook.php?hemh1=0"
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

export default G10mat;
