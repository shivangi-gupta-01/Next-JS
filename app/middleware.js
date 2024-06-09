import { NextResponse } from "next/server"
export default function middleware(request){
    
        if(request.nextURL.pathname!="/login"){
            return NextResponse.redirect(new URL("/login",request.URL))
        }
}