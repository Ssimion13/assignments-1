import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BlogPost extends Component {
    render() {
        return (
            <div className="post">
                <h1>{this.props.title}</h1>
                <h4>{this.props.sub}</h4>
                <p>{`Posted by ${this.props.author} on ${this.props.date}`}</p>
            </div>
        )
    }
}

BlogPost.PropTypes = {
    title: PropTypes.string.isRequired,
    sub: PropTypes.string,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default BlogPost;
