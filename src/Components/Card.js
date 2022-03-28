import styles from '../assets/Card.module.css';
import React from 'react';

const Card = (props) => {
    let cardRef = React.createRef();    
    const {d,idx,eventClick} = props.params;
    
    const handlerEvent = (e, d) => {
        eventClick(e, d, cardRef, styles)
    }    

    return (
        <li id={"li_" + d + "_" + idx} className={styles.card} ref={cardRef} onClick={(e) => handlerEvent(e,d)}>
            <div className={styles.cardFront} >{d}</div>
            <div className={styles.cardBack} >BACK</div>
        </li>
    )
}

export default Card;