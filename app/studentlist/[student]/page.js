"use client"

export default function Student({params}) {
    console.log(params);
  return (
    <div className="flex flex-col">
      <h1 className =" font-bold" >Details</h1>
      <h1>Name: {params.student}</h1>
    </div>
  );
}
