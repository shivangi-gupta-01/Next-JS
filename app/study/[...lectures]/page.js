"use client"
export default function Lecture({params}) {
    console.log(params);
  return (
    <div className="flex flex-col">
      <h1 className =" font-bold" > {params.lectures[0]}</h1>
      <h1> {params.lectures[1]}</h1>
    </div>
  );
}
