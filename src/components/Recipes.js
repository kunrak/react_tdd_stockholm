import React from 'react'

function Recipes() {
  return (
    <div>
      <h1>Recipe Finder</h1>
      <form>
        <input type='text' placeholder='Enter an ingredient to find recipes...' />
        <button type='submit'>Find</button>
      </form>
      <ul>
        <li>Burger</li>
        <li>French toast</li>
        <li>Salmon</li>
      </ul>
    </div>
  )
}

export default Recipes