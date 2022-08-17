import React, { useState, useEffect } from 'react';
import MunroList from '../components/MunroList';
import './MunroContainer.css';
import MunroDetail from '../components/MunroDetail'
import MunroSelector from '../components/MunroSelector'

const MunroContainer = () => {
    const [munros, setMunros] = useState([]);
    const [selectedMunro, setSelectedMunro] = useState(null);

    useEffect(() => {
      getMunros();
    }, [])

    // const onMunroClick = (munro) => {
    //     setSelectedMunro(munro)
    // }

    const onMunroSelected = (munro) => {
        setSelectedMunro(munro);
    }

    const getMunros = function(){
        fetch('https://munroapi.herokuapp.com/munros')
        .then(res => res.json())
        .then(munros => setMunros(munros))
    }

    return (
        <div className="main-container">
            <MunroSelector munros={munros} onMunroSelected={onMunroSelected}/>
            {selectedMunro? <MunroDetail munro= {selectedMunro}/> : null}
        </div>
    )
}

export default MunroContainer;
