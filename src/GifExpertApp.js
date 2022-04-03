import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = (props) => {

  const [categories, setCategories] = useState(['simpson']);

  const handleAdd = () => {
    setCategories([...categories, 'cat4'])
  }
  
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {
          categories.map(category => {
            return <GifGrid key={category} category={category} />
          })
        }
      </ol>
    </>

  )
}

GifExpertApp.propTypes = {}

export default GifExpertApp;