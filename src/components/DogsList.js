import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class DogsList extends Component {

    renderDogsBreed(breed) {
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
        console.log("WHAT PROPS?!", this.props)
        console.log("WHATE STATE?!", this.state)

        return(
            <div className="dogs-list">
                <h1>Dogs List</h1>
                {this.renderDogsBreed(dogBreeds)}
            </div>
        )
    }
}

export default DogsList;