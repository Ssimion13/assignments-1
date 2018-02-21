import React, {Component} from 'react';
import BlogList from './BlogList';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div className="mainBox">
                <Header />
                <BlogList />
                <Footer />
            </div>
        )
    }
}

export default App;
