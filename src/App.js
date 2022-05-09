import React, { useState, useEffect } from 'react';
import './App.scss';
import './Articles.scss';
import { useQuery } from '@apollo/client';
import { GET_KB } from './query';

import Home from './Home';
import Header from './Header';
import Section from './Section';
import Loading from './Loading';
import { Route, Routes } from 'react-router-dom';
import Articles from './Articles';
import Article from './Article';
import PageError from './PageError';

export const App = () => {
    const { data, loading } = useQuery(GET_KB, { variables: { domain: 'kb-1' }});
    //const { data, loading } = useQuery(GET_KB, { variables: { domain: document.location.hostname.split('.')[0] }});

    const [stylesKb, setStylesKb] = useState({});
    const [featuredArticles, setFeaturedArticles] = useState([]);

    const magicStyles = (data) => {
        let styles = {};
        try {
            styles = JSON.parse(data);
        } catch (e) {
            console.error(e);
        }

        styles.bgColor = styles.bgColor || '#2B78E4';
        styles.fontColor = styles.fontColor || '#FFFFFF';
        styles.brandColor = styles.brandColor || '#2B78E4';
        styles.header = styles.header || 'What are you looking for?';
        styles.subheader = styles.subheader || 'Get help straight from our team...';
        styles.searchText = styles.searchText || 'Search for answers...';

        setStylesKb(styles);
    };

    useEffect(() => {
        if (data && data.publicKb) {
            if (data.publicKb.publicSections.length) {
                const filterArticlesFeatured = [];
                data.publicKb.publicSections.forEach(item => {
                    item.publicCategories.forEach(category => {
                        filterArticlesFeatured.push(...category.publicArticles
                            .map(b => ({ ...b, category: category, section: item })).filter(a => a.featured)
                        );
                    });
                });

                setFeaturedArticles(Array.from(new Set(filterArticlesFeatured.map(a => a.id))).map(id => filterArticlesFeatured.find(a => a.id === id)));
            }

            magicStyles(data.publicKb.magicStyles);
        }
    }, [data, loading]);

    return (
        !loading ?
            (data && data.publicKb) ?
                <div className="main">
                    <Header
                        stylesKb={stylesKb}
                        publicKb={data.publicKb}
                    />
                    <Routes>
                        <Route exact path='/'
                            element={
                                <Home publicKb={data.publicKb} featuredArticles={featuredArticles} stylesKb={stylesKb}/>
                            }
                        />
                        <Route exact path='/section/:sectionSlug' element={<Section stylesKb={stylesKb} />} >
                            <Route exact path='category/:categorySlug' element={<Articles stylesKb={stylesKb} />} />
                        </Route>
                        <Route path='/articles/:articleSlug'
                               element={<Article kb={data.publicKb} stylesKb={stylesKb} />}
                        />
                        <Route path="*" element={<PageError />} />
                    </Routes>
                </div>
                : <PageError />
            : <Loading/>
    );
};
