import React from 'react'
import { connect } from 'react-redux';
import Ugly from './Ugly';

function Uglies(props) {
    let { uglies } = props;
    let ugliesComponents = uglies.map((ugly, i) => {
        return <Ugly key={i + ugly.name} {...ugly} index={i}></Ugly>
    })
    return (
        <div>
            {ugliesComponents}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { uglies: state.uglies }
}

export default connect(mapStateToProps, {}) (Uglies);
