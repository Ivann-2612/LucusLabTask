import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const PageTwo = () => {

    const [photo, setPhoto] = useState('')
    const [clientId, setClientId] = useState('wSuf86m2SbqRlxRSsetTfPkc9GJuvSk0wD7SVj0HhcI')
    const [results, setResults] = useState([])

    const handleChange = (e) => {
        setPhoto(e.target.value)
    }
    const handleSubmit = (e) => {
        console.log(photo)

        const url = 'https://api.unsplash.com/search/photos?page=1&query=' + photo + '&client_id=' + clientId

        axios.get(url)
        .then((res) => {
            console.log(res.data.results)
            setResults(res.data.results)
        })
    }

    return (
        <div className='page-two'>
            <div><h1>Unsplash gallery</h1><span style={{color:'#DCC69D'}}>Search your favourite image</span></div> 
            <div style={{marginBottom:'10px'}}>
            <input onChange={handleChange} type='search' name='photo' placeholder='Search for photos...' />
            <button onClick={handleSubmit} type='submit'>Search</button>
            </div><br /> 
            {
                results.map((result) => (
                    <div className='gallery'>
                         <img style={{height:'370px',width:'370px'}} src={result.urls.small} alt='decorative images' />
                    </div>
                       
                    )
                    
                )
            }
        </div>
    )
}

export default PageTwo
