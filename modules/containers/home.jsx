import React from 'react';
import {Link} from 'react-router-dom';

import Header from '../components/header/header';

import s from './home.scss';

export const Home = () => (
    <div className={s.pageWrapper}>
        <Header />
        <div><img src="https://ru.puma.com/media/contentmanager/content/cache/1440x500//avidhome.jpg" alt=""/></div>
        <div><img src="https://ru.puma.com/media/contentmanager/content/cache/1440x500//avidhome.jpg" alt=""/></div>
        <p><Link to="/catalog">go to Catalog</Link></p>
    </div>
);
