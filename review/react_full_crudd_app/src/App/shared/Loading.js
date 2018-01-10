import React from 'react';
import { Segment, Loading, Image } from 'semantic-ui-react';

const LoadingPage = () => {
    return (
        <div>
            <Segment loading>
                <Image src='/assets/images/wireframe/paragraph.png' />
            </Segment>
        </div>
    )
}

export default LoadingPage;
