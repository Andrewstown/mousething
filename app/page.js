'use client'

import {useEffect} from "react"

export default function Home() {
  let box, field, trail
  let draw = false
  let lastX = -1
  let lastY = -1

  useEffect(() => {
    box = document.querySelector('#box')
    field = document.querySelector('#field')
    trail = document.querySelector('#trail')
    document.addEventListener('click', e => createPool(e))
    document.addEventListener('mousemove', e => {if (draw) {createTrail(e)}})
    timer()
  }, [])

  function timer() {
    setTimeout(() => {
      draw = true
      timer()
    }, 1000/30)
  }

  function createPool(e) {
    let div = document.createElement('div')
    div.className = 'pool'
    div.style.top = `${e.clientY}px`
    div.style.left = `${e.clientX}px`
    div.style.borderColor = window.getComputedStyle(box).backgroundColor
    field.append(div)
    setTimeout(() => {
      field.firstChild.remove()
    }, 800)
  }

  function createTrail(e) {
    if (lastX != -1) {
      let x = e.clientX
      let y = e.clientY
      let xDif = Math.abs(x-lastX)
      let yDif = Math.abs(y-lastY)
      draw = false
      let div = document.createElement('div')
      div.className = 'trail'
      div.style.top = `${y - (y-lastY < 0 ? 0 : yDif)}px`
      div.style.left = `${x - (x-lastX < 0 ? 0 : xDif)}px`
      div.style.width = `${xDif + 1}px`
      div.style.height = `${yDif + 1}px`
      div.style.backgroundColor = window.getComputedStyle(box).backgroundColor
      trail.append(div)
      setTimeout(() => {
        trail.firstChild.remove()
      }, 800)
      lastX = x
      lastY = y
    } else {
      lastX = e.clientX
      lastY = e.clientY
    }
  }
  
  return (<>
    <div id="box"/>
    <img id="lebron" src="./lebron.webp"/>
    <img id="rockstarfreddy" src="./rockstarfreddy.webp"/>
    <div id="field"></div>
    <div id="trail"></div>
  </>)
}