import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PUBLIC_ARTICLE } from './query';
import Editor from './Editor';
import Loading from './Loading';
import { Link, useParams, useLocation } from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';
import Categories from './Categories';

const Article = ({ kb, stylesKb }) => {
	const { state } = useLocation();
	const { articleSlug } = useParams();
	const { data } = useQuery(GET_PUBLIC_ARTICLE, { variables: { slug: articleSlug, kbId: kb.id }});

	const [sectionId, setSectionId] = useState('');
	const [categories, setCategories] = useState([]);
	const [categoryId, setCategoryId] = useState('');
	const [crumbs, setCrumbs] = useState([{ title: 'Home', url: '/' }]);

	useEffect(() => {
		if (kb && data && data.data) {
			if (kb.publicSections.length) {
				const mapping = [];
				kb.publicSections.forEach(section => {
					section.publicCategories.forEach(category => {
						mapping.push(...category.publicArticles
							.map(b => ({ ...b, category: category, section: section })).filter(a => a.slug === articleSlug)
						);
					});
				});
				setSectionId(mapping[0].section.id);
				setCategoryId(data.data.categories[0].id);
				setCategories(mapping[0].section.publicCategories);

				setCrumbs([
					{ title: 'Home', url: '/' },
					{ title: mapping[0].section.title, url: `/section/${mapping[0].section.id}/` },
					{ title: mapping[0].category.title, url: `/section/${mapping[0].section.id}/category/${mapping[0].category.id}` },
				]);
			}
		}
	}, [kb, data]);

	return (
		<div className="content">
			<div className="section">
				<BreadCrumbs
					crumbs={crumbs}
					stylesKb={stylesKb}
				/>
				<div className="section-main">
					<div className="category-aside">
						{data && data.data && categories ?
							<Categories categories={categories}
							            stylesKb={stylesKb}
							            sectionId={sectionId}
							            categoryId={categoryId}
							            articleId={data.data.id}
							            state={state}
							            isShowSubCategories={true}
							/> : <Loading />
						}
					</div>
					<div className="content-aside">
						{data && data.data ?
							<div>
								<div className="title">{data.data.title}</div>
								<Editor body={data.data.body}/>
								<div className="tags-wrap">
									Tags:
									{data.data.tags.map(tag =>
										<Link to={`/section/${sectionId}/category/${categoryId}`} key={tag.id} className="link">
											{tag.tag}
										</Link>
									)}
								</div>
								{stylesKb.allowRatings &&
								<div className="rating-wrap">
									<div className="title-rating">Did you find this article helpful?</div>
									<div className="icons-rating">
										<svg className="svg-icon like" width="24" height="24" viewBox="0 0 16 16"
										     xmlns="http://www.w3.org/2000/svg">
											<path
												d="M13.7441 5.3131H10.4501V3.05397C10.4501 1.97011 10.1269 1.18333 9.48704 0.716491C8.48153 -0.0213175 7.11365 0.393292 7.05489 0.41288C6.8231 0.484702 6.66313 0.703433 6.66313 0.948281V3.67425C6.66313 5.6918 4.28974 6.3937 4.18853 6.41982C4.182 6.42308 4.17547 6.42308 4.17221 6.42635L3.90124 6.51123C3.59437 6.22067 3.18302 6.04438 2.7325 6.04438H1.70414C0.763926 6.04112 0 6.80504 0 7.74526V13.6086C0 14.5488 0.763926 15.3127 1.70414 15.3127H2.7325C3.1667 15.3127 3.56499 15.1495 3.86533 14.8785C4.29627 15.391 4.94266 15.7208 5.66415 15.7208H12.3371C13.8845 15.7208 14.9129 14.872 15.0924 13.4518L15.9216 8.24475L15.9674 7.96399C15.9869 7.83341 16 7.69955 16 7.5657C15.9967 6.32514 14.9847 5.3131 13.7441 5.3131ZM3.31687 13.6118C3.31687 13.935 3.0557 14.1962 2.7325 14.1962H1.70414C1.38094 14.1962 1.11977 13.935 1.11977 13.6118V7.74526C1.11977 7.42206 1.38094 7.16089 1.70414 7.16089H2.7325C3.0557 7.16089 3.31687 7.42206 3.31687 7.74526V13.6118ZM14.8606 7.79097L13.9857 13.2886C13.9857 13.2951 13.9825 13.3017 13.9825 13.3082C13.9433 13.6281 13.8257 14.6043 12.3371 14.6043H5.66415C4.98837 14.6043 4.43665 14.0525 4.43665 13.3768V7.74526C4.43665 7.67017 4.43012 7.59509 4.42032 7.52L4.50194 7.49388C4.74026 7.42533 7.7829 6.49164 7.7829 3.67099V1.40859C8.1061 1.37595 8.5305 1.3988 8.82759 1.6208C9.16058 1.86891 9.33034 2.34881 9.33034 3.05397V5.87462C9.33034 6.18476 9.58172 6.43614 9.89186 6.43614H13.7441C14.3709 6.43614 14.877 6.94542 14.877 7.56897C14.877 7.64079 14.8704 7.71588 14.8606 7.79097Z"/>
										</svg>
										<svg className="svg-icon dislike" width="24" height="24" viewBox="0 0 16 16"
										     xmlns="http://www.w3.org/2000/svg">
											<path
												d="M13.7441 5.3131H10.4501V3.05397C10.4501 1.97011 10.1269 1.18333 9.48704 0.716491C8.48153 -0.0213175 7.11365 0.393292 7.05489 0.41288C6.8231 0.484702 6.66313 0.703433 6.66313 0.948281V3.67425C6.66313 5.6918 4.28974 6.3937 4.18853 6.41982C4.182 6.42308 4.17547 6.42308 4.17221 6.42635L3.90124 6.51123C3.59437 6.22067 3.18302 6.04438 2.7325 6.04438H1.70414C0.763926 6.04112 0 6.80504 0 7.74526V13.6086C0 14.5488 0.763926 15.3127 1.70414 15.3127H2.7325C3.1667 15.3127 3.56499 15.1495 3.86533 14.8785C4.29627 15.391 4.94266 15.7208 5.66415 15.7208H12.3371C13.8845 15.7208 14.9129 14.872 15.0924 13.4518L15.9216 8.24475L15.9674 7.96399C15.9869 7.83341 16 7.69955 16 7.5657C15.9967 6.32514 14.9847 5.3131 13.7441 5.3131ZM3.31687 13.6118C3.31687 13.935 3.0557 14.1962 2.7325 14.1962H1.70414C1.38094 14.1962 1.11977 13.935 1.11977 13.6118V7.74526C1.11977 7.42206 1.38094 7.16089 1.70414 7.16089H2.7325C3.0557 7.16089 3.31687 7.42206 3.31687 7.74526V13.6118ZM14.8606 7.79097L13.9857 13.2886C13.9857 13.2951 13.9825 13.3017 13.9825 13.3082C13.9433 13.6281 13.8257 14.6043 12.3371 14.6043H5.66415C4.98837 14.6043 4.43665 14.0525 4.43665 13.3768V7.74526C4.43665 7.67017 4.43012 7.59509 4.42032 7.52L4.50194 7.49388C4.74026 7.42533 7.7829 6.49164 7.7829 3.67099V1.40859C8.1061 1.37595 8.5305 1.3988 8.82759 1.6208C9.16058 1.86891 9.33034 2.34881 9.33034 3.05397V5.87462C9.33034 6.18476 9.58172 6.43614 9.89186 6.43614H13.7441C14.3709 6.43614 14.877 6.94542 14.877 7.56897C14.877 7.64079 14.8704 7.71588 14.8606 7.79097Z"/>
										</svg>
									</div>
									{stylesKb.showCount &&
									<div>
										{data.data.likes} out of {data.data.dislikes} people found this article helpful so far
									</div>
									}
								</div>
								}
							</div> : <Loading />
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Article;
