import React from 'react'
import './Pokemon.css'

function Pokemon(props) {
    console.log(props.pokemon)

    const {name, weight, height, id, base_experience, sprites, types} = props.pokemon
    return (
        <div className="pokemon-container">
            <div className="pokemon">
                <h1>Name: {name[0].toUpperCase() + name.slice(1)}</h1>
                <p>ID: {id}</p>
                <div className="Stats" >
                    <p>Base-XP: {base_experience}</p>
                    <p>Height: {height}</p>
                    <p>Weight: {weight}</p>
                </div>

                <div className="Image">
                    <img src={sprites ? sprites.front_default : null} alt="pokemon sprite" />
                </div>

                <div className="types">
                    <h1>Types</h1>
                    {types ? types.map( (elem) => {
                        return (
                            <div key={elem.slot}>
                                <p>{elem.type.name}</p>
                            </div>
                        )
                    }) : null}
                </div>
                
                
            </div>
        </div>
    )
} 

export default Pokemon