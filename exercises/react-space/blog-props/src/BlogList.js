import React, {Component} from 'react';
import BlogPost from './BlogPost';

const posts = [
    {
        title: "Man must explore, and this is exploration at its greatest",
        sub: "Problems look mighty small from 150 miles up",
        author: "Start Bootstrap",
        date: "September 24, 2018"
    },{
        title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
        sub: "",
        author: "Start Bootstrap",
        date: "September 18, 2018"
    },{
        title: "Science has not yet mastered prophecy",
        sub: "We predict too much for the next year and yet far too little for the next ten.",
        author: "Start Bootstrap",
        date: "August 24, 2018"
    },{
        title: "Failure is not an option",
        sub: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
        author: "Start Bootstrap",
        date: "July 8, 2018"
    }
]

class BlogList extends Component {
    render() {
        const mappedPosts = posts.map((post, i) => {
            return <BlogPost title={post.title} sub={post.sub} author={post.author} date={post.date} key={i + post.date}/>
        })
        return (
            <div className="blog">
                {mappedPosts}
            </div>
        )
    }
}

export default BlogList;
