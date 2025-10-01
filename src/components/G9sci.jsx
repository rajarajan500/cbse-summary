import React from "react";
import { Link } from "react-router-dom";

function G9sci() {
  return (
    <div>
      <div className="border p-3 text-2xl">
        <h1>SCIENCE CBSE BOOK SUMMARY (Chapter wise): </h1>
      </div>
      <div className="p-5 text-lg flex flex-col gap-4">
        <h1 className="text-center">Science – Class 9 CBSE</h1>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 1: Matter in Our Surroundings:
        </h1>
        <h2>
          This chapter introduces the concept of matter and its physical
          states—solid, liquid, and gas. You learn about properties like
          compressibility, fluidity, and rigidity. It explains how temperature
          and pressure affect states of matter and introduces concepts like
          evaporation and latent heat.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 2: Is Matter Around Us Pure:
        </h1>
        <h2>
          You explore mixtures, solutions, and pure substances. The chapter
          explains types of mixtures—homogeneous and heterogeneous—and methods
          of separation like filtration, distillation, and chromatography. It
          also covers elements, compounds, and their differences.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 3: Atoms and Molecules:
        </h1>
        <h2>
          This chapter introduces the basic building blocks of matter. You learn
          about laws of chemical combination, atomic symbols, and molecular
          formulas. It explains how atoms combine to form molecules and how to
          calculate molecular mass and moles.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 4: Structure of the Atom:
        </h1>
        <h2>
          You study atomic models by Thomson, Rutherford, and Bohr. The chapter
          explains subatomic particles—protons, neutrons, and electrons—and how
          they are arranged in shells. It introduces atomic number, mass number,
          and isotopes.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 5: The Fundamental Unit of Life:
        </h1>
        <h2>
          This chapter explores the structure and function of cells. You learn
          about organelles like nucleus, mitochondria, endoplasmic reticulum,
          and Golgi apparatus. It explains differences between plant and animal
          cells and the role of the cell membrane.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">Chapter 6: Tissues:</h1>
        <h2>
          You study how cells group together to form tissues. The chapter
          explains plant tissues like parenchyma and xylem, and animal tissues
          like epithelial, muscular, and nervous tissue. It shows how structure
          relates to function.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 7: Diversity in Living Organisms:
        </h1>
        <h2>
          This chapter introduces classification of organisms. You learn about
          kingdoms like Monera, Protista, Fungi, Plantae, and Animalia. It
          explains the basis of classification and the importance of
          biodiversity.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">Chapter 8: Motion:</h1>
        <h2>
          You explore concepts of speed, velocity, and acceleration. The chapter
          explains uniform and non-uniform motion, graphical representation, and
          equations of motion. It builds understanding of how objects move and
          change position.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 9: Force and Laws of Motion:
        </h1>
        <h2>
          This chapter covers Newton’s laws of motion. You learn about inertia,
          momentum, and how force affects motion. It explains action-reaction
          pairs and the mathematical relationships between force, mass, and
          acceleration.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 10: Gravitation:
        </h1>
        <h2>
          You study the universal law of gravitation and how it governs motion
          of planets and falling objects. The chapter explains free fall,
          weight, mass, and buoyancy. It also covers Archimedes’ principle and
          density.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 11: Work and Energy:
        </h1>
        <h2>
          This chapter introduces the concepts of work, energy, and power. You
          learn about kinetic and potential energy, conservation of energy, and
          units like joule and watt. It connects physics to everyday activities.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">Chapter 12: Sound:</h1>
        <h2>
          You explore how sound is produced, travels, and is heard. The chapter
          explains frequency, amplitude, pitch, and speed of sound. It also
          covers reflection of sound, echo, and applications like SONAR.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 13: Why Do We Fall Ill:
        </h1>
        <h2>
          This chapter discusses health, disease, and prevention. You learn
          about infectious and non-infectious diseases, causes, symptoms, and
          treatment. It emphasizes hygiene, immunity, and public health
          measures.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 14: Natural Resources:
        </h1>
        <h2>
          You study resources like air, water, soil, and fossil fuels. The
          chapter explains their importance, pollution, and conservation. It
          promotes sustainable use and environmental awareness.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 15: Improvement in Food Resources:
        </h1>
        <h2>
          This chapter covers agricultural practices, animal husbandry, and
          fisheries. You learn about crop variety improvement, irrigation,
          fertilizers, and disease control. It connects science to food
          production and nutrition.
        </h2>
      </div>
      <div className="p-5  gap">
        <a
          className="text-blue-500 hover:underline"
          href="https://drive.google.com/drive/folders/0B6bIm9hct1oFZElPTWVYR3A4MHc?resourcekey=0-_Y0JRTCfnfF_48WrqijjCw&usp=drive_link"
        >
          Science [PDF] ,
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

export default G9sci;
