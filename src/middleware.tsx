// // middleware.ts
// // import { NextResponse } from 'next/server';
// // import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   // Check for the necessary data in local storage
//   const name = localStorage.getItem('name');
//   const email = localStorage.getItem('email');
//   const device_id = localStorage.getItem('name');

//   // If any of the required fields are missing, redirect to the register page
//   if (!name || !email || !device_id) {
//     const registerUrl = new URL('/register', request.url);
//     return NextResponse.redirect(registerUrl);
//   }

//   // If valid, proceed to the requested route
//   return NextResponse.next();
// }

// // Apply middleware to the OTP verification route
// export const config = {
//   matcher: ['/otp-verification'],
// };
export default function middleware(){
    
}
