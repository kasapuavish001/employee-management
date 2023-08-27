import Link from "next/link";
import MyComponent from "./components/test";


export default function Home() {
  return (
    <h1>Home
        <Link href='/pages/login'>Login</Link>
        <MyComponent/>
    </h1>
  )
}
