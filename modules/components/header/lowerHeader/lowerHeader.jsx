import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Menu} from 'components/menu/menu';

import './lowerHeader.scss';

export class LowerHeader extends Component {
    render() {
        const {isSticky} = this.props;

        return (
            <div className="lower-header">
                <div className="lower-header-inner clearfix">
                    <Link className={`logo ${isSticky ? 'logoSmall' : ''}`} to="/">
                        <img src="https://ru.puma.com/media/logo/default/site-logo.png"
                             alt=""
                             className="max-image"
                        />
                    </Link>
                    <Menu />
                    <div className="search-and-cart">
                        <div className="header-search">
                            <div className="form minisearch" action="/catalogsearch/result">
                                <input type="text"
                                       name="q"
                                       value=""
                                       placeholder="Поиск..."/>
                                <button type="submit"
                                        title="Поиск"
                                        className="search-btn absolute">
                                    <i className="icon" />
                                </button>
                            </div>
                        </div>
                        <div className="header-cart-wr">
                            <Link className="header-cart" to="/checkout/cart">
                                <span className="label">Корзина<span className="count">(0)</span></span>
                                <span className="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}