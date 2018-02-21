import React, { Component } from 'react';
import { Header, Card, Button, Icon } from 'semantic-ui-react';
import Comments from '../../Comments';



class RepArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            show: true,
            toggleComments: false,
        }
        this.incrementVote = this.incrementVote.bind(this)
        this.decreaseVote = this.decreaseVote.bind(this)
        this.handleComments = this.handleComments.bind(this)
    }

    handleComments() {
        this.setState((prevState) => {
            return {
                toggleComments: !prevState.toggleComments
            }
        })
    }

    incrementVote() {
        this.setState({ clicks: this.state.clicks + 1 });
    }
    decreaseVote() {
        this.setState({ clicks: this.state.clicks - 1 });
    }
    toggleClick() {
        this.setState({ show: !this.state.show });
    }
    render() {
        let { toggleComments } = this.state;
        let { articleSource, articleTitle, comments } = this.props;
        let formStyle = { display: toggleComments ? "inherit" : "none" }
        return (
            <div>
                <Card.Group>
                    <Card>
                        <Card.Header>
                            <a target="_blank" href={articleSource}>Link</a>
                        </Card.Header>
                        <Card.Content>
                            {articleTitle}
                        </Card.Content>
                        <Card.Content extra>
                            <Button size='mini' onClick={this.incrementVote} color='green'><Icon name='arrow up' /></Button>
                            <Button size='mini' onClick={this.decreaseVote} color='red'><Icon name='arrow down' /></Button>
                            {this.state.show ? <h3>{this.state.clicks}</h3> : ''}
                            <Button size='mini' onClick={this.handleComments}>Comments</Button>
                            <div style={formStyle}>
                                <Comments />
                                <div>
                                *{comments}
                                </div>
                            </div>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        )
    }

}

export default RepArticle;