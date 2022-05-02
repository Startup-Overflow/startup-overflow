import React from 'react';
import './SessionCard.css';
import { Button } from './Button';

function SessionCard(props) {
    return(
        <div className='session_card'>
            <div className='session_card__body'>
                <img className='session_card__image' src={props.img} alt=""/>
                <h2 className='session_card__title'>{props.title}</h2>
                <div className='eventDateTime'>
                    <i class="fa fa-calendar"></i>
                    <span className='date'>{props.date}</span>
                    <i class="fa fa-clock"></i>
                    <span className='time'>{props.time}</span>
                </div>
                <Button buttonStyle='btn--outline'>Attend</Button>
            </div>
        </div>
    );
}

export default SessionCard;