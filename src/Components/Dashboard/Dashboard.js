import React, {Component} from 'react'
import './Dashboard.css'
import axios from 'axios'

import Pokemon from '../Pokemon/Pokemon'

 class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            pokemon: {},
            search: 'Charmander',
            error: ''
        }
    }

    componentDidMount() {
        this.handlePokeSearch()
    }

    handlePokeSearch() {
        const {search} = this.state

        axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}/`).then(res => {
            this.setState({
                search: '',
                pokemon: res.data,
                error: ""
            })        }).catch( (err) => {
            this.setState({
                search: '',
                pokemon: {},
                error: "Pokemon does not exist"
            })
        })

    }

    handleInput = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    render() {
        const{search, error, pokemon} = this.state
        
        return(
            <div className="dashboard" >
                
                <header>
                    <h1>Pokemon Finder</h1>

                    <div>
                        <input type='text' 
                        placeholder="Enter pokemon name here..." 
                        onChange={this.handleInput}
                        value={search} />

                        <button onClick={() => this.handlePokeSearch()}>Search</button>

                        {error ? <p>{error}</p> : null}

                    </div>


                </header>

                {pokemon.name ? <Pokemon pokemon={pokemon}/> : null}
            </div>
        )
    }
}

export default Dashboard