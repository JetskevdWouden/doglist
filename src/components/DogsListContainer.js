import React, {Component} from 'react'
import superagent from  'superagent'
import DogsList from './DogsList'

class DogsListContainer extends Component {
    state = {
        dogBreeds: null
    }

    componentDidMount() {
        superagent
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                const breeds = Object.keys(response.body.message)
                this.updateBreeds(breeds)
            })
            .catch(console.error)
    }

    updateBreeds = (breeds) => {
        this.setState({
            dogBreeds: breeds
        })
    }

    render() {
        console.log("STATE", this.state)
        return (
            <DogsList dogBreeds={this.state.dogBreeds} />
        )
    }
}

export default DogsListContainer