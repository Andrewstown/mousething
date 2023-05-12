'use client'

import {useEffect} from "react"

export default function Home() {
  let box
  let field

  useEffect(() => {
    box = document.querySelector('#box')
    field = document.querySelector('#field')
    field.addEventListener('click', (e) => {
      let div = document.createElement('div')
      div.className = 'pool'
      div.style.top = `${e.y}px`
      div.style.left = `${e.x}px`
      div.style.borderColor = window.getComputedStyle(box).backgroundColor
      field.append(div)
      setTimeout(() => {
        field.firstChild.remove()
      }, 800)
    })
  }, [])
  
  return (<>
    <div id="box"/>
    <img id="lebron" src="./lebron.webp"/>
    <img id="rockstarfreddy" src="./rockstarfreddy.webp"/>
    <div id="field">
    </div>
  </>)
}