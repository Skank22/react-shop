import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getCatalog} from '../actions/catalog/catalog';

class Catalog extends Component {
    state = {
        visible: false
    };

    componentDidMount() {
        this.props.dispatch(getCatalog());
    }

    render() {
        const {catalog} = this.props;

        return (
            <div>
                <h1>Catalog</h1>
                <p>Filter catalogs</p>
                <p>{catalog}</p>
            </div>
        )
    }
}

export default connect(store => ({
    catalog: store.catalog.item
}))(Catalog);
