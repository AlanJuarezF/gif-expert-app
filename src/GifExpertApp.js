import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch', 'Samurai X', 'Dragon Ball']);

    //const handleAdd = () =>{
    //   //setCategories([...categories, 'HunterXHunter']);
    //    setCategories(cats => [...categories, 'HunterXHunter']);
    //}



  return (
    <>
        <h2>
            GifExpertApp
        </h2>
        <AddCategory />
        <hr />
        
        
        <ol>
            {
                categories.map( category => {
                    return <li key={ category }> {category} </li>
                })
            }
        </ol>

    </>
  )
}
