import React, { useState } from 'react';
import './index.css';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';

function Search() {
    const [input, setInput] = useState('');
    const search = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Searched');


    }
    return (
        <form className='search'>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon' />
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon />
            </div>
            <div className='search__buttons'>
                <Button type="submit" onClick={search}>Google Search</Button>
                <Button variant='outlined'>I'm Feeling Lucky</Button>
            </div>
        </form>
    )
}

export default Search;