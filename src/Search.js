import React, {useState, useEffect, useRef } from 'react';
import { SEARCH_ARTICLE } from './query';
import { useLazyQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const Search = ({ placeholder, publicKb }) => {
	const [searchFilter, setSearchFilter] = useState('');
	const [ getSearchArticles, { data }] = useLazyQuery(SEARCH_ARTICLE);
	const ref = useRef(null);

	const onChangeInput = (e) => {
		setSearchFilter(e.target.value);
		if (e.target.value.length > 2) {
			getSearchArticles({ variables: {
				q: e.target.value, level: 'article', page: 'KB', domain: 'kb-1'
				//q: e.target.value, level: 'article', page: 'KB', domain: document.location.hostname.split('.')[0]
			}}).then(() => {});
		}
	};
	const clearInput = () => {
		setSearchFilter('');
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setSearchFilter('');
			}
		};
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, [ searchFilter ]);

	return (
		<div className="search-wrap" ref={ref}>
			<input placeholder={placeholder} onChange={onChangeInput} value={searchFilter}/>
			{data && Boolean(searchFilter.length) &&
				<div className="popup-search-articles">
					{Boolean(data.data.length) ? data.data.map(article =>
						<div className="article" key={article.id}>
							<Link to={`/articles/${article.slug}`}
							      onClick={() => clearInput()}
							      state={{section: publicKb.publicSections.find(a => a.id === article.sectionId), category: {id: article.categoriesIds.charAt(0)}}}
							>
								{article.title}
							</Link>
						</div>
					) : <div>No articles...</div>}
				</div>
			}
		</div>
	);
};

export default Search;
