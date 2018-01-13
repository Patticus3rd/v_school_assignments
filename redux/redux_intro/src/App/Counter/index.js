import React from 'react'
import { connect } from 'react-redux';
import { handleCount } from '../../redux/count';

function Counter(props) {
    let { count } = props;
    return (
        <div>
            <h1>Count: {count}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count 
    }
}

export default connect(mapStateToProps, { handleCount })(Counter);
