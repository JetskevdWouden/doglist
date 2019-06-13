import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class DogsBreedImages extends Component {

    renderImages(images) {
        if(images === null) {
            return 'Loading Images...'
        } else
            return images.map(url => <img src={url} alt="Dog" />)
    }

    render() {
        const {images} = this.props

        return(
            <div className="dog-breed-images">
                <h1>Dogs Breeds Images</h1>

                This page will show images of the {this.props.breed} breed.

                <Link to="/">Go back to index</Link>
            <div>
                {this.renderImages(images)}
            </div>
        </div>
        )
    }
}

export default DogsBreedImages