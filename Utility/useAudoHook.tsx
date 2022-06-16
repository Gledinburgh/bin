import { useEffect, useRef } from "react"


const useAudio = (src: string = "") => {
  console.log("useAudio:", src)

  const audio = useRef(new Audio(src))

  useEffect(() => {
    audio.current.volume = 1
  }, [1])

  useEffect(() => {
    audio.current.playbackRate = 1
  }, [1])

  return audio.current
}

export default useAudio;