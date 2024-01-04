/* eslint-disable no-useless-concat */
import React, { useState } from "react";
import ExpandedContent from './ExpandedContent.js'


function PokemonThumbnail({ Pokemon }) {
    
    const [isModel, setIsModel] = useState(false);
    const handelKnowMore = () => {
        setIsModel(true)
        console.log(Pokemon.type)
    }
    return (
        <>
        <div className={"thumb-container " + ` ${Pokemon.type}`}>
            <div className='number'>
                #{Pokemon.id}
            </div>
            <img src={Pokemon.image} alt={Pokemon.name} />
            <div className='detail-wrapper'>
                <h3>{Pokemon.name}</h3>
                <p>Type:{Pokemon.type}</p>
                <button className={'pokeinfo '+ `${Pokemon.type}`} onClick={handelKnowMore}>Know more...</button>
            </div>
            
        </div>
        {
                isModel ? <ExpandedContent data={Pokemon} model={isModel} setModel={setIsModel} /> : null
            }
        </>
    )
}


export default PokemonThumbnail;
