import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


function Article(props) {
    let { articleTitle, articleSource } = props;
    return (
        <div>
            <Header>
                {articleTitle}
            </Header>
            <Header>{articleSource}</Header>
        </div>
    )
}

export default Article;
