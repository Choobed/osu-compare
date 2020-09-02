import axios from 'axios';
import React, { useState } from 'react';

import UsernameInput from './UsernameInput';

const Search = ({ setFirstPlayer, setSecondPlayer, setHasSearched }) => {
    const [firstUsername, setFirstUsername] = useState('');
    const [secondUsername, setSecondUsername] = useState('');
    const [loading, setLoading] = useState(false);
    
    const submitSearch = async e => {
        e.preventDefault();
        setLoading(true);

        const response = await axios.all([
            axios.get(`http://localhost:3001/?username=${firstUsername}`),
            axios.get(`http://localhost:3001/?username=${secondUsername}`)
        ]).finally(() => {
            setLoading(false);
            setHasSearched(true);
        });

        setFirstPlayer(response[0].data);
        setSecondPlayer(response[1].data);
    }

    return (
        <form className="ui form" onSubmit={e => submitSearch(e)}>
            <div className="ui centered grid">
                <div className="six wide column">
                    <UsernameInput username={firstUsername} onUsernameChange={setFirstUsername} />
                </div>
                <div className="four wide column" style={{textAlign: "center"}}>
                    <button className={`ui positive button ${loading ? "disabled loading" : ""}`}>Compare</button>
                </div>
                <div className="six wide column" style={{textAlign: "right"}}>
                    <UsernameInput username={secondUsername} onUsernameChange={setSecondUsername} />
                </div>
            </div>
        </form>
    );
}

export default Search;