import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Results from './components/Results';
import Search from './components/Search';

const App = () => {
    const [firstPlayer, setFirstPlayer] = useState({});
    const [secondPlayer, setSecondPlayer] = useState({});

    return (
        <div className="ui container">
            <Search setFirstPlayer={setFirstPlayer} setSecondPlayer={setSecondPlayer} />
            <Results firstPlayer={firstPlayer} secondPlayer={secondPlayer} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));