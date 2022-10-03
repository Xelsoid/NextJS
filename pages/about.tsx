import {useCallback} from "react";
import {Typography} from "../components/Typography";
import {useRouter} from "next/router";

export default function AboutPage() {
  const router = useRouter();

  const goBack = useCallback(() => {
      router.back()
  }, [])

  const goHome = useCallback(() => {
      router.push('/')
  }, [])

  return (
      <>
          <Typography text="About page"/>
          <button onClick={goBack}>Go back</button>
          <button onClick={goHome}>Go Home</button>
      </>
  )
}