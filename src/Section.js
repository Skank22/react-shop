import React, {useState, useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from './query';
import './Section.scss';

import Loading from './Loading';
import Categories from './Categories';
import BreadCrumbs from './BreadCrumbs';
import { Outlet, useParams, useLocation } from 'react-router-dom';

const Section = ({ stylesKb }) => {
	const { state } = useLocation();
	const { sectionSlug, categorySlug, articleSlug } = useParams();
	const { data } = useQuery(GET_CATEGORIES, { variables: { sectionId: state.section.id }});

	const [crumbs, setCrumbs] = useState([{ title: 'Home', url: '/' }]);

	useEffect(() => {
		if (data && data.data.length) {
			setCrumbs([
				{ title: 'Home', url: '/' },
				{ title: data.data[0].section.title, url: `/section/${sectionSlug}/` },
				{ title: data.data.filter(d => d.slug === categorySlug)[0].title, url: `/section/${sectionSlug}/category/${categorySlug}` },
			]);
		}
	}, [data, categorySlug]);

	return (
		<div className="content">
			<div className="section">
				<BreadCrumbs
					crumbs={crumbs}
					stylesKb={stylesKb}
				/>
				<div className="section-main">
					<div className="category-aside">
						{data && data.data ?
							<Categories categories={data.data}
							            stylesKb={stylesKb}
							            sectionSlug={sectionSlug}
							            categorySlug={categorySlug}
							            articleSlug={articleSlug}
							            state={state}
							            isShowSubCategories={false}
							/>
							: <Loading />
						}
					</div>
					<div className="content-aside">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section;
