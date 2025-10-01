import React from "react";
import GradeCard from "./GradeCard";

function Body() {
  return (
    <>
      <div className="flex flex-row">
        <GradeCard
          grade="GRADE : VI"
          sub1="Social Science"
          mat="/G6mat"
          sci="/G6sci"
          eng="/G6eng"
          ss="/G6ss"
        />
        <GradeCard
          grade="GRADE : VII"
          sub1="Social Science"
          mat="/G7mat"
          sci="/G7sci"
          eng="/G7eng"
          ss="/G7ss"
        />
        <GradeCard
          grade="GRADE : VIII"
          sub1="Social Science"
          mat="/G8mat"
          sci="/G8sci"
          eng="/G8eng"
          ss="/G8ss"
        />
        <GradeCard
          grade="GRADE : IX"
          sub1="Social Science"
          mat="/G9mat"
          sci="/G9sci"
          eng="/G9eng"
          ss="/G9ss"
        />
      </div>
      <div className="flex flex-row justify-center">
        <GradeCard
          grade="GRADE : X"
          sub1="Social Science"
          mat="/G10mat"
          sci="/G10sci"
          eng="/G10eng"
          ss="/G10ss"
        />
        <GradeCard
          grade="GRADE : XI"
          mat="/G11mat"
          sci="/G11sci"
          eng="/G11eng"
          cs="/G11cs"
          sub2="Computer Science"
        />
        <GradeCard
          grade="GRADE : XII"
          mat="/G12mat"
          sci="/G12sci"
          eng="/G12eng"
          cs="/G12cs"
          sub2="Computer Science"
        />
        <h6 className="text-gray-500/20">RAJARAJAN..</h6>
      </div>
      
    </>
  );
}

export default Body;
