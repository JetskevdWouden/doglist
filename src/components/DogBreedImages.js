import React from 'react'
import {Link} from 'react-router-dom'

function DogBreedImages(props) {        //why a function an not a class React.Component??
    return (
        <div className="dog-breed-images">
            <h1>Dogs Breeds Images</h1>

            This page will show images of the {props.match.params.breed} breed.

            <Link to="/">Go back to index</Link>
        </div>
    )
}

export default DogBreedImages