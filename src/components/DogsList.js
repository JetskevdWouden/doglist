import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class DogsList extends Component {

    renderDogBreed(breed) {
        if(breed === null)
            return 'Loading...'
        else
            return (
                <ul>
                    {breed.map(breed => 
                    <li key={breed}>
                    <Link to={ `/dog-breeds/${breed}` }>{breed}</Link>
                    </li>)}
                </ul>
            )
    }

    render() {
        const {dogBreeds} = this.props
        return(
            <div className="dogs-list">
                <h1>Dogs List</h1>
                {this.renderDogBreed(dogBreeds)}
            </div>
        )
    }
}

export default DogsList;