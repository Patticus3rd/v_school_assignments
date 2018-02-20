import React, { Component } from 'react';
import { Header, Card, Button, Icon } from 'semantic-ui-react';

class DemArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            show: true
        }
        this.incrementVote = this.incrementVote.bind(this)
        this.decreaseVote = this.decreaseVote.bind(this)
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
        let { articleSource, articleTitle } = this.props;
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
                            <div>
                                <Button size='mini' onClick={this.incrementVote} color='green'><Icon name='arrow up'/></Button>
                                <Button size='mini' onClick={this.decreaseVote} color='red'><Icon name='arrow down'/></Button>
                                {this.state.show ? <h3>{this.state.clicks}</h3> : ''}
                            </div>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        )
    }

}

export default DemArticle;