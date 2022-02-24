import { useState, useEffect } from "react"
// import { getGifs } from '../helpers/getGifs'
import {getGif} from '../helpers/getGifs'


export const useFetchGifs = ( category ) => {
  
    const [state, setState] = useState({
         data: [],
         loading: true
    });

    useEffect(() => {

        getGif( category )
            .then( imgs =>{

                setTimeout(() => {
                    
                    setState({
                        data: imgs,
                        loading: false
                    })

                }, 2000)

            })

    }, [category])



    return state;

}
