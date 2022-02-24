import React from 'react'

export const GifGrid = ( {category} ) => {

    const getGif = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Valorant&limit=10&api_key=IxtMmBwlYA7T4SfXF6myCpxFyUZ3COZ9'
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url 
            }
        })

        console.log(gifs);


    }

    getGif();

  return (
    <div>
        <h3>
            {category}
        </h3>
    </div>
  )
}
