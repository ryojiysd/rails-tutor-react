import React from 'react';

class About extends React.Component {
    componentDidMount() {
        document.title = 'About | Ruby on Rails Tutorial Sample App';
    }

    render() {
        return (
            <div>
                <h1>About</h1>
                <p>
                    <a href="https://railstutorial.jp/">Ruby on Rails Tutorial</a>
                    is a <a href="https://railstutorial.jp/#ebook">book</a> ans
                    <a href="https://railstutorial.jp/#screenast">screencast</a>
                    to teach web development with
                    <a href="http://rubyonrails.org/">Ruby on Rails</a>. This is the sample application
                    for the tutorial.
                </p>
            </div>
        );
    }
};

export default About;
