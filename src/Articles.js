import React, { useEffect, useState } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_PUBLIC_ARTICLES, SEARCH_ARTICLE } from './query';
import { useParams, useLocation, Link } from 'react-router-dom';
import Loading from './Loading';

const Articles = ({ stylesKb, isShowTitle = true }) => {
	const { state } = useLocation();
	const { categoryId } = useParams();
	const [tag, setTag] = useState([]);

	const { data } = useQuery(GET_PUBLIC_ARTICLES, {
		variables: { categories_Id: state.category.id || categoryId },
	});

	const [ getSearchArticles, { data: dataSearch }] = useLazyQuery(SEARCH_ARTICLE);

	useEffect(() => {
		if (tag.tag) {
			getSearchArticles({ variables: { q: tag.tag, level: 'article', page: 'KB', domain: 'kb-1', isTag: true }})
				.then((response) => {
				//setArticles(response.data.data);
			});
		}
	}, [tag, data]);

	return (
		<div className="articles">
			{data &&
				<>
					{isShowTitle &&
					    <>
						    <div className="title">{state?.category.title}</div>
						    <div className="description">{state?.category.description}</div>
						    <div className="divider" />
					    </>
					 }
					{Boolean(data.data.length) ?
						data.data.map(article =>
							<div className="article" key={article.id} style={{color: stylesKb.brandColor}}>
								<Link to={`/articles/${article.slug}`}
								      state={state}
								>
									{article.title}
								</Link>
							</div>
						) : <Loading />
					}
				</>
			}
		</div>
	);
};

export default Articles;
