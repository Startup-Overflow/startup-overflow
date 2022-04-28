import React from 'react';
import './Query.css';
import { Button } from './Button';

function Query() {
    return(
    <div className='input-area'>
        <form>
            <input
                className='query-input'
                name='query'
                type='text'
                placeholder='Search a Query...'
            />
            <Button buttonStyle='btn--outline'><i className='fa fa-search' />  Search</Button>
        </form>
    </div>
    );
}

export default Query;