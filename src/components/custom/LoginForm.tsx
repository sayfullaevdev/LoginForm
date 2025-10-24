// // src/components/custom/LoginForm.tsx
// import React from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"

// export function LoginForm() {
//   const [email, setEmail] = React.useState("")
//   const [password, setPassword] = React.useState("")

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Email:", email)
//     console.log("Password:", password)
//     // Здесь можешь добавить реальный login-запрос
//   }

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-background px-4">
//       <Card className="w-full max-w-md shadow-lg">
//         <CardContent className="p-8">
//           <form onSubmit={handleSubmit} className="flex flex-col gap-6">
//             <div className="text-center">
//               <h1 className="text-2xl font-bold mb-1">Welcome back 👋</h1>
//               <p className="text-muted-foreground">Login to your account</p>
//             </div>

//             <div className="flex flex-col gap-2">
//               <label htmlFor="email" className="text-sm font-medium">
//                 Email
//               </label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="you@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="flex flex-col gap-2">
//               <div className="flex justify-between items-center">
//                 <label htmlFor="password" className="text-sm font-medium">
//                   Password
//                 </label>
//                 <a
//                   href="#"
//                   className="text-sm text-muted-foreground hover:underline"
//                 >
//                   Forgot?
//                 </a>
//               </div>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="••••••••"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <Button type="submit" className="w-full">
//               Sign In
//             </Button>

//             <p className="text-center text-sm text-muted-foreground">
//               Don’t have an account?{" "}
//               <a href="#" className="font-medium hover:underline">
//                 Sign up
//               </a>
//             </p>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }
