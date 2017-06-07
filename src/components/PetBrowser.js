import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor(props){
    super(props)

    this.createPet = this.createPet.bind(this)
  }

  createPet(pet){
    return <Pet key={pet.id} pet={pet} isAdopted={this.props.adoptedPets.includes(pet.id) ? true : false} onAdoptPet={this.props.onAdoptPet}/>
  }

  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map((pet) => this.createPet(pet))}
      </div>
    );
  }
}

export default PetBrowser;
