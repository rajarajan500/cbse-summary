import React from "react";
import { Link } from "react-router-dom";

function G9mat() {
  return (
    <div>
      <div className="border p-3 text-2xl">
        <h1>MATH CBSE BOOK SUMMARY (Chapter wise): </h1>
      </div>
      <div className="p-5 text-lg flex flex-col gap-4">
        <h1 className="text-center">Mathematics – Class 9 CBSE</h1>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 1: Number Systems:
        </h1>
        <h2>
          This chapter introduces real numbers, including rational and
          irrational numbers. You learn about laws of exponents, decimal
          expansions, and how to represent numbers on the number line. It also
          covers the concept of surds and the importance of the number √2 and π.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 2: Polynomials:
        </h1>
        <h2>
          You explore algebraic expressions called polynomials. The chapter
          explains degrees, coefficients, and types of polynomials. You learn
          how to add, subtract, and multiply polynomials, and understand
          identities like (x + a)(x + b) = x² + (a + b)x + ab.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 3: Coordinate Geometry:
        </h1>
        <h2>
          This chapter introduces the Cartesian plane and coordinates. You learn
          how to plot points using ordered pairs (x, y), understand quadrants,
          and visualize geometric figures on the plane. It lays the foundation
          for graph-based geometry.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 4: Linear Equations in Two Variables:
        </h1>
        <h2>
          You study equations of the form ax + by = c. The chapter explains how
          to find solutions, plot graphs, and interpret linear relationships. It
          emphasizes the concept of infinite solutions and graphical
          representation.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 5: Introduction to Euclid’s Geometry:
        </h1>
        <h2>
          This chapter introduces Euclid’s definitions, axioms, and postulates.
          You learn the logical structure of geometry and how basic assumptions
          lead to geometric truths. It connects ancient geometry to modern
          mathematical reasoning.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 6: Lines and Angles:
        </h1>
        <h2>
          You explore relationships between lines and angles. The chapter covers
          types of angles, intersecting lines, parallel lines, and angle
          properties like vertically opposite angles and linear pairs. It builds
          reasoning skills through proofs.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 7: Triangles:
        </h1>
        <h2>
          This chapter focuses on triangle properties and congruence. You learn
          criteria like SSS, SAS, ASA, and RHS for proving triangles congruent.
          It also covers inequalities and the triangle angle sum property.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 8: Quadrilaterals:
        </h1>
        <h2>
          You study properties of quadrilaterals, including parallelograms and
          rectangles. The chapter explains angle sums, diagonals, and conditions
          for special types. It uses reasoning and proofs to explore geometric
          relationships.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 9: Areas of Parallelograms and Triangles:
        </h1>
        <h2>
          This chapter teaches how to calculate areas using base and height. You
          learn about congruent figures, area equivalence, and how
          transformations affect area. It emphasizes logical reasoning and
          geometric proofs.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 10: Circles:
        </h1>
        <h2>
          You explore properties of circles, including chords, arcs, and angles.
          The chapter covers perpendicular bisectors, cyclic quadrilaterals, and
          theorems related to tangents and angles subtended by chords.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 11: Constructions:
        </h1>
        <h2>
          This chapter teaches geometric constructions using ruler and compass.
          You learn how to bisect angles, draw perpendiculars, and construct
          triangles with given conditions. It builds precision and spatial
          understanding.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 12: Heron’s Formula:
        </h1>
        <h2>
          You learn how to find the area of a triangle when all sides are known
          using Heron’s formula. The chapter also applies the formula to
          real-life problems involving quadrilaterals split into triangles.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 13: Surface Areas and Volumes:
        </h1>
        <h2>
          This chapter covers surface area and volume of solids like cubes,
          cuboids, cylinders, cones, and spheres. You learn formulas and apply
          them to solve practical problems involving packaging and storage.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 14: Statistics:
        </h1>
        <h2>
          You study data collection, organization, and interpretation. The
          chapter explains mean, median, and mode, and how to represent data
          using bar graphs and histograms. It builds analytical skills for
          handling information.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 15: Probability:
        </h1>
        <h2>
          This chapter introduces basic probability concepts. You learn how to
          calculate the likelihood of events using simple experiments like
          tossing coins or rolling dice. It emphasizes reasoning and prediction.
        </h2>
      </div>
      <div className="p-5  gap">
        <a
          className="text-blue-500 hover:underline"
          href="https://ncert.nic.in/textbook.php?memh1=0"
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

export default G9mat;
