import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      // [{id: 1, name: "Yenta", age: 8, weight: 60, type: "dog", gender: "female"}],
      adoptedPets: [],
      // [],
      filters: {
        type: 'all',
      }
    };
    this.onAdoptPet = this.onAdoptPet.bind(this)
    this.onFindPetsClick = this.onFindPetsClick.bind(this)
    this.onChangeType = this.onChangeType.bind(this)
  }

  onAdoptPet(id){
    this.state.adoptedPets.push(id)
  }

  onChangeType(value){
    this.setState({
      filters: Object.assign({}, this.state.filters, {type: value})
    })
  }

  // When the <Filters /> component calls the onFindPetsClick prop you pass into it,
  // the <App /> component should fetch a list of pets using fetch.

  onFindPetsClick(){
    let url = "/api/pets"
    if (this.state.filters.type !== "all"){
      url += `?type=${this.state.filters.type}`
    }
    fetch(url).then(res => res.json()).then(pets => this.setState({ pets }));
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filter={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
