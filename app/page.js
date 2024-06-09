// import Image from "next/image";
'use client'

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const [name, setName] = useState('shivangi')
  const navigate =(name)=>{
    router.push(name)
  }
  const handle = ()=>{
    setName('gupta')
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Events {name}</h1>
      <button onClick={()=>handle()}>Click</button>
      <Link href="/login">go to login</Link>
      <button onClick={()=>{navigate('/login')}}>login page</button>
    </main>
  );
}
