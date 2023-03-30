import { useRouter } from "next/router";
import { useEffect, useRef } from "react"

export default function Home() {

  let router = useRouter();
  const ref = useRef();

  useEffect(() => {

    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",

    });

  }, [])
  return (
    <>
      <h1 ref={ref}> Hello </h1>
      <button onClick={() => router.push("/product")}>  Product</button>
    </>
  )
}
