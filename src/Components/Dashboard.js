// import React from 'react';
import styles from '../assets/Dashboard.module.css';
import Card from '../Components/Card';
import {useState} from 'react';

const DashboardGame = (props) => {
    const { data, onResponseApp} = props;
    const [stateCardsSelected, setStateCardsSelected] = useState([]); // storage for cards selected on play    
    let tmpStateCard = [];

    const resetStates = () => {
        setStateCardsSelected([])
    }

    const eventClick = (e, d, card, s) => {
        tmpStateCard = stateCardsSelected;        
        tmpStateCard.push({ d: d, card: card })
        setStateCardsSelected(tmpStateCard)

        if (stateCardsSelected.length <= 2){
            card.current.classList.toggle(s.flipCard);
                        
            if (stateCardsSelected.length === 2){                
                if (stateCardsSelected[0].d === stateCardsSelected[1].d){
                    console.log("SON IGUALES!")         
                    onResponseApp(stateCardsSelected)
                    resetStates()

                } else {
                    console.log("DIFERENTES")                    
                    setTimeout(() => {
                        stateCardsSelected[0].card.current.classList.toggle(s.flipCard)
                        stateCardsSelected[1].card.current.classList.toggle(s.flipCard)
                        // resetear state
                        resetStates()
                    }, 700);

                }
            }
        } 
    }

    return (
        <ul className={styles.container}>
            {
                data.map((d,idx) => (
                    <Card key={"card" + idx + "_" + d} params={{ d, idx, eventClick}}/>
                ))
            }
        </ul>
    )
}

export default DashboardGame;