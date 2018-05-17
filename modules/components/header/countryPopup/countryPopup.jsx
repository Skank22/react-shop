import React, {Component} from 'react';

import './countryPopup.scss';

export class CountryPopup extends Component {
    render() {
        return (
            <div className="region-selector">
                <div className="inner relative">
                    <div className="clearfix">
                        <div className="left-side forty left">
                            <div className="region">
                                <div className="region-name">North America</div>
                                <div className="sites">
                                    <div className="country-container">
                                        <a href="#" className="link">Canada</a>
                                    </div>
                                    <div className="country-container">
                                        <a href="#" className="link">United States</a>
                                    </div>
                                    <div className="country-container">
                                        <a href="#" className="link">Mexico</a>
                                    </div>
                                </div>
                            </div>
                            <div className="region">
                                <div className="region-name">South America</div>
                                <div className="sites">
                                    <div className="country-container">
                                        <a href="#" className="link">Argentina</a>
                                    </div>
                                    <div className="country-container">
                                        <a href="#" className="link">Brazil</a>
                                    </div>
                                    <div className="country-container">
                                        <a href="#" className="link">Chile</a>
                                    </div>
                                    <div className="country-container">
                                        <a href="#" className="link">Peru</a>
                                    </div>
                                    <div className="country-container">
                                        <a href="#" className="link">Colombia</a>
                                    </div>
                                    <div className="country-container">
                                        <a href="#" className="link">Uruguay</a>
                                    </div>
                                    <div className="country-container">
                                        <a href="#" className="link">Ecuador</a>
                                    </div>
                                    <div className="country-container">
                                        <a href="#" className="link">Paraguay</a>
                                    </div>
                                    <div className="country-container">
                                        <a href="#" className="link">Venezuela</a>
                                    </div>
                                </div>
                            </div>
                            <div className="region">
                                <div className="region-name">Middle East</div>
                                <div className="sites">
                                    <div className="country-container">
                                        <a href="#" className="link">Israel</a>
                                    </div>
                                    <div className="country-container">
                                        <a href="#" className="link">United Arab Emirates</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-side sixty left">
                            <div className="region">
                                <div className="region-name">Europe</div>
                                <div className="sites">
                                    <div className="clearfix">
                                        <div className="left two-column europe-column left-column">
                                            <div className="country-container">
                                                <a href="#" className="link">Deutschland</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">United Kingdom</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">France</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Schweiz / Suisse / Svizzera</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">&Ouml;sterreich</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Belgique</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Nederland</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Danmark</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Italia</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Cesk&aacute; Republika</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Ireland</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Luxembourg</a>
                                            </div>
                                        </div>
                                        <div className="left two-column europe-column right-column">
                                            <div className="country-container">
                                                <a href="#" className="link">Polska</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Espa&ntilde;a</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Portuguesa</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Россия</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Suomi</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Sverige</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Latvija</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Eesti</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Slovensko</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Slovenija</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Magyarorsz&aacute;g</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Hellas</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Turkey</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix">
                                <div className="left two-column">
                                    <div className="region">
                                        <div className="region-name">Asia</div>
                                        <div className="sites">
                                            <div className="country-container">
                                                <a href="#" className="link">China</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">India</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Indonesia</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Japan</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">South Korea</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Malaysia</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Hong Kong</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Taiwan</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">Singapore</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="left two-column">
                                    <div className="region">
                                        <div className="region-name">Oceania</div>
                                        <div className="sites">
                                            <div className="country-container">
                                                <a href="#" className="link">Australia</a>
                                            </div>
                                            <div className="country-container">
                                                <a href="#" className="link">New Zealand</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="region">
                                        <div className="region-name">Africa</div>
                                        <div className="sites">
                                            <div className="country-container">
                                                <a href="#" className="link">South Africa</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}