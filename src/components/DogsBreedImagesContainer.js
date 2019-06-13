import React, {Component} from 'react'
import DogsBreedImages from './DogsBreedImages'
import superagent from 'superagent'

class DogsBreedImagesContainer extends Component {
    state = {
        images: null
    }

    componentDidMount() {
        const breed = this.props.match.params.breed
        superagent
            .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
            .then(response => this.updateImages(response.body.message))
            .catch(console.error)
    }

    updateImages(dogImages) {
        this.setState({
            images: dogImages
        })
    }

    render () {
        return (
            <DogsBreedImages images={this.state.images} breed={this.props.match.params.breed}/>
        )
    }
}

export default DogsBreedImagesContainer
