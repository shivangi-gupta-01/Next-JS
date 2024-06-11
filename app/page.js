// import Image from "next/image";
// 'use client'
 
import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
import Image from "next/image";
import Photo from "../public/vercel.svg"

export default function Home() {
  // const router = useRouter()
  // const [name, setName] = useState('shivangi')
  // const navigate =(name)=>{
  //   router.push(name)
  // }
  // const handle = ()=>{
  //   setName('gupta')
  // }
  console.log(Photo);
  return (
    <main>
      {/* <h1>Events {name}</h1>
      <button onClick={()=>handle()}>Click</button>
      <Link href="/login">go to login</Link>
      <button onClick={()=>{navigate('/login')}}>login page</button> */}





      {/* Image optimization */}
      <h1>Image optimization</h1>
      <Image src={Photo} />
    </main>
  );
}
