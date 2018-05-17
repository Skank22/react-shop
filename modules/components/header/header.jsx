import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import {stickyHeader} from 'actions/header/header';

import {UpperHeader} from './upperHeader/upperHeader';
import {LowerHeader} from './lowerHeader/lowerHeader';

import s from  './header.scss';

const HEADER_HEIGHT = 50;

class Header extends Component {
    //state = {menu: null};

    /**
     * Called after component was mounted for the first time
     */
    componentDidMount() {
        document.addEventListener('scroll', this.handleStickyChange);
    }

    /**
     * Remove event listener
     */
    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleStickyChange);
    }

    /**
     * Set sticky status boolean
     */
    handleStickyChange = () => {
        const scrollTop = document.documentElement ? document.documentElement.scrollTop : 0;
        const winTop = window.pageYOffset || scrollTop;

        this.props.dispatch(stickyHeader(winTop > HEADER_HEIGHT));
    };

    render() {
        const {stickyHeader: isSticky} = this.props;

        return (
            <header className={classNames(s.wrapHeader, {[s.fixHeader]: isSticky})}>
                <div className={classNames({[s.sticky]: isSticky})}>
                    {!isSticky && <UpperHeader />}
                    <LowerHeader isSticky />
                </div>
            </header>
        )
    }
}

export default connect(store => ({
    stickyHeader: store.stickyHeader,
}))(Header);
