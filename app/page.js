'use client'

import {useEffect, useState} from "react"

export default function Home() {
  const [pools, setPools] = useState([])

  let box

  useEffect(() => {
    box = document.querySelector("#box")
    document.addEventListener("click", (e) => {
      setPools(pools => [...pools, {x: e.x, y: e.y, color: window.getComputedStyle(box).backgroundColor}])
      setTimeout(() => {
        setPools(pools => (pools.slice(1, pools.length)))
      }, 800)
    })
  }, [])
  
  return (<>
    <div id="box"/>
    <img id="lebron" src="./lebron.webp"/>
    <img id="rockstarfreddy" src="./rockstarfreddy.webp"/>
    {pools.map((pool, i) => (
      <div className="pool" key={`pool-${i}`} style={{top: `${pool.y}px`, left: `${pool.x}px`, borderColor: pool.color}}/>
    ))}
  </>)
}