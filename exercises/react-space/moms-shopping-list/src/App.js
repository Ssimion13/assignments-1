import React from 'react';
import ShoppingList from './ShoppingList';
import './index.css';

function App() {
    return (
        <div className="shoppingList">
            <h1>Mom's Shopping List</h1>
            <br/>
            <ShoppingList />
        </div>
    )
}

export default App;
