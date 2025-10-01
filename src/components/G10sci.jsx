import React from "react";
import { Link } from "react-router-dom";

function G10sci() {
  return (
    <div>
      <div className="border p-3 text-2xl">
        <h1>SCIENCE CBSE BOOK SUMMARY (Chapter wise): </h1>
      </div>
      <div className="p-5 text-lg flex flex-col gap-4">
        <h1 className="text-center">Science – Class 10 CBSE</h1>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 1: Chemical Reactions and Equations:
        </h1>
        <h2>
          This chapter introduces chemical changes and how they are represented
          through equations. You learn about types of reactions—combination,
          decomposition, displacement, and redox—and how to balance equations.
          It also explains observable changes like color, gas release, and
          temperature shifts.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 2: Acids, Bases and Salts:
        </h1>
        <h2>
          You explore the properties of acids and bases, indicators like litmus
          and phenolphthalein, and the pH scale. The chapter explains
          neutralization, preparation of salts, and the role of compounds like
          baking soda and bleaching powder in daily life.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 3: Metals and Non-metals:
        </h1>
        <h2>
          This chapter compares physical and chemical properties of metals and
          non-metals. You learn about reactivity, displacement reactions,
          corrosion, and how metals are extracted from ores. It also covers uses
          and limitations of different elements.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 4: Carbon and its Compounds:
        </h1>
        <h2>
          You study the versatile nature of carbon, its bonding, and compounds
          like hydrocarbons, alcohols, and acids. The chapter explains
          homologous series, functional groups, and reactions like combustion
          and oxidation. It also introduces soaps and detergents.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 5: Periodic Classification of Elements:
        </h1>
        <h2>
          This chapter traces the evolution of the periodic table—from
          Dobereiner to Mendeleev to the modern table. You learn how elements
          are arranged by atomic number, and how trends like valency, metallic
          character, and reactivity emerge across periods and groups.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 6: Life Processes:
        </h1>
        <h2>
          You explore essential biological processes—nutrition, respiration,
          transportation, and excretion—in plants and animals. The chapter
          explains how organisms obtain energy, circulate materials, and remove
          waste, highlighting the complexity of living systems.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 7: Control and Coordination:
        </h1>
        <h2>
          This chapter explains how organisms respond to stimuli through nervous
          and hormonal systems. You learn about the brain, spinal cord, reflex
          actions, and plant movements. It also covers hormones like insulin and
          adrenaline.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 8: How do Organisms Reproduce?:
        </h1>
        <h2>
          You study modes of reproduction—binary fission, budding, vegetative
          propagation, and sexual reproduction. The chapter explains human
          reproductive systems, menstrual cycle, and reproductive health,
          emphasizing continuity of life.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 9: Heredity and Evolution:
        </h1>
        <h2>
          This chapter explores inheritance of traits, Mendel’s experiments, and
          the role of DNA. You learn about variation, speciation, and how
          evolution shapes biodiversity. It connects genetics to the history of
          life on Earth.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 10: Light – Reflection and Refraction:
        </h1>
        <h2>
          You study how light behaves with mirrors and lenses. The chapter
          explains laws of reflection, refraction, focal length, and image
          formation. It also covers ray diagrams and applications like the human
          eye and optical instruments.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 11: The Human Eye and the Colourful World:
        </h1>
        <h2>
          This chapter explains the structure and function of the human eye. You
          learn about defects like myopia and hypermetropia, and phenomena like
          dispersion, scattering, and atmospheric refraction that create
          rainbows and blue skies.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 12: Electricity:
        </h1>
        <h2>
          You explore electric current, potential difference, resistance, and
          Ohm’s law. The chapter explains series and parallel circuits, heating
          effects, and power consumption. It connects physics to household
          applications.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 13: Magnetic Effects of Electric Current:
        </h1>
        <h2>
          This chapter shows how electricity produces magnetism. You learn about
          electromagnets, magnetic fields, right-hand rule, and devices like
          electric motors and generators. It emphasizes practical applications
          in technology.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 14: Sources of Energy:
        </h1>
        <h2>
          You study renewable and non-renewable energy sources—solar, wind,
          hydro, fossil fuels, and nuclear. The chapter compares efficiency,
          cost, and environmental impact, promoting sustainable choices.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 15: Our Environment:
        </h1>
        <h2>
          This chapter explains ecosystems, food chains, and waste management.
          You learn about biodegradable and non-biodegradable materials, and how
          human activities affect ecological balance.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 16: Sustainable Management of Natural Resources:
        </h1>
        <h2>
          You explore conservation strategies for forests, water, wildlife, and
          fossil fuels. The chapter emphasizes reduce-reuse-recycle,
          participatory management, and the importance of long-term planning for
          resource use.
        </h2>
      </div>
      <div className="p-5  gap">
        <a
          className="text-blue-500 hover:underline"
          href="https://drive.google.com/drive/folders/0B6bIm9hct1oFejh0OFNFTDVEbjg?resourcekey=0-FfWMPZe7a5xcR3g5s5BRwA&usp=drive_link"
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

export default G10sci;
