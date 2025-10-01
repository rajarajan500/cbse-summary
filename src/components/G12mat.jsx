import React from "react";
import { Link } from "react-router-dom";

function G12mat() {
  return (
    <div>
      <div className="border p-3 text-2xl">
        <h1>MATHEMATICS CBSE BOOK SUMMARY (Chapter wise): </h1>
      </div>
      <div className="p-5 text-lg flex flex-col gap-4">
        <h1 className="text-center">Mathematics – Class 12 CBSE</h1>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 1: Relations and Functions:
        </h1>
        <h2>
          Builds on Class 11 concepts. You study types of relations and
          functions—identity, inverse, composite—and learn about binary
          operations and function properties.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 2: Inverse Trigonometric Functions:
        </h1>
        <h2>
          Introduces inverse trigonometric functions, their domains, ranges, and
          principal values. You learn how to simplify expressions and solve
          equations using identities.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 3: Matrices:
        </h1>
        <h2>
          Covers matrix types, operations, and properties. You learn addition,
          multiplication, transpose, and how matrices are used to solve linear
          equations.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 4: Determinants:
        </h1>
        <h2>
          Explains how to calculate determinants of matrices, use cofactor and
          adjoint, and apply Cramer's Rule. You learn how to find inverse of a
          matrix and solve systems of equations.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 5: Continuity and Differentiability:
        </h1>
        <h2>
          You study the conditions for continuity and differentiability of
          functions. The chapter introduces chain rule, derivatives of inverse
          and implicit functions, and logarithmic differentiation.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 6: Applications of Derivatives:
        </h1>
        <h2>
          Covers increasing/decreasing functions, maxima and minima, tangents
          and normals, and rate of change. You apply derivatives to real-world
          problems.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 7: Integrals:
        </h1>
        <h2>
          Introduces indefinite and definite integrals, integration techniques
          (substitution, parts, partial fractions), and properties of definite
          integrals.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 8: Applications of Integrals:
        </h1>
        <h2>
          You learn how to calculate area under curves and between curves using
          definite integrals. This chapter connects geometry with calculus.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 9: Differential Equations:
        </h1>
        <h2>
          Explains order and degree of differential equations, formation, and
          solution methods. You study variable separable, homogeneous, and
          linear equations.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 10: Vector Algebra:
        </h1>
        <h2>
          Covers vectors, magnitude, direction, dot product, and cross product.
          You learn how vectors are used in geometry and physics.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 11: Three-Dimensional Geometry:
        </h1>
        <h2>
          Explores direction cosines, direction ratios, equations of lines and
          planes, and angle between them. You learn how to find shortest
          distance and intersection points.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 12: Linear Programming:
        </h1>
        <h2>
          Introduces optimization problems using constraints. You learn how to
          graph feasible regions and find maximum or minimum values using
          corner-point method.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 13: Probability:
        </h1>
        <h2>
          Covers conditional probability, Bayes’ theorem, random variables, and
          probability distributions. You study binomial distribution and
          expected value.
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

export default G12mat;
