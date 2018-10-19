import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAYszN0Fq2v6n1qR8Fcm3SzRzTWEDNcgeg';

const App = () => {
    return (<div>
        <SearchBar />
    </div>
    ); // search MORE CHANGES NMORE
}

ReactDOM.render(<App />, document.querySelector('.container'));
