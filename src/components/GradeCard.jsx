import React from "react";

function GradeCard({ grade , sub1 , mat, sci, eng, cs, ss ,  sub2}) {
  return (
    <div className="h-[350px] w-[250px] border m-20  shadow-lg ">
      <div className="flex p-4 border justify-center text-2xl text-bold">
        <h1>{grade}</h1>
      </div>
      <div className=" font-semibold flex justify-center flex-col gap-5 p-3 items-center">
      
            <a href={mat} >Maths</a>
            <a href={sci}>Science</a>
            <a href={eng}>English</a>
            
            <a href={cs}>{sub2}</a>
            <a href={ss}>{sub1}</a>
      </div>
    </div>
  );
}

export default GradeCard;
