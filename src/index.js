import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Results from './components/Results';
import Search from './components/Search';

const App = () => {
    const [firstPlayer, setFirstPlayer] = useState({});
    const [secondPlayer, setSecondPlayer] = useState({});
    const [hasSearched, setHasSearched] = useState(false);

    return (
        <div className="ui container">
            <Search
                setFirstPlayer={setFirstPlayer}
                setSecondPlayer={setSecondPlayer}
                setHasSearched={setHasSearched} />
            <Results
                firstPlayer={firstPlayer}
                secondPlayer={secondPlayer}
                hasSearched={hasSearched} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));