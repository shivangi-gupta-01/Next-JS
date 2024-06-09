'use client'
import { usePathname } from "next/navigation"

export default function Layout({children}){
    const pathName = usePathname()
    console.log(pathName);
    return (

        <div>
            <h1>common Layout</h1>
            {children}
        </div>
    )
}