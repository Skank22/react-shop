import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {CountryPopup} from '../countryPopup/countryPopup';

import './upperHeader.scss';

export class UpperHeader extends Component {
    render() {
        return (
            <div className="upper-header text-right tablet-hide">
                <div className="upper-header-inner">
                    <div className="aux-menu">
                        <ul className="no-list">
                            <li className="caps"><strong>Бесплатная доставка</strong> от 6500 рублей</li>
                            <li>
                                <div className="widget block block-cms-link">
                                    <Link to="/order-status" title="Отследить заказ">
                                        <span>Отследить заказ</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="widget block block-cms-link">
                                    <Link to="/cs-landing" title="Помощь">
                                        <span>Помощь</span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="auth-link">
                        <a href="#">Войти</a>
                    </div>
                    <div className="region-selector-wr">
                        <p className="region-selector-btn">
                            <a className="current-city" href="#">Россия</a>
                        </p>
                        <CountryPopup />
                    </div>
                </div>
            </div>
        )
    }
}