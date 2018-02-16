import React from 'react';
import Tile from './Tile';

function App() {
    return (
        <div class="app">
            <Tile backgroundColor="blue" title="Title One" subtitle="Sub One" information="Some one info" />
            <Tile backgroundColor="red" title="Title Two" subtitle="Sub Two" information="Some two info" />
            <Tile backgroundColor="green" title="Title Three" subtitle="Sub Three" information="Some three info" />
            <Tile backgroundColor="pink" title="Title Four" subtitle="Sub Four" information="Some four info" />
        </div>
    )
}

export default App;
