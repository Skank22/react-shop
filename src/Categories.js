import React from 'react';
import { Link } from 'react-router-dom';
import Articles from './Articles';

const Categories = ({ categories, stylesKb, sectionSlug, categorySlug, articleSlug, state, isShowSubCategories }) => {
	const newState = state || {};

	return (
		<div className="categories">
			<h2>Categories</h2>
			{categories.map(category =>
				<div className={category.slug === state.category.slug ? 'active' : ''} key={category.id}>
					<Link to={`/section/${newState.section.slug || sectionSlug}/category/${category.slug}`}
					      state={{section: newState.section, category}}
					>
						{category.title ? category.title : 'Default'}
						{category.slug === categorySlug &&
							<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487 487">
								<path d="M397.7,376.1c20.4,20.4,53.6,20.4,74,0s20.4-53.6,0-74L280.5,110.9c-20.4-20.4-53.6-20.4-74,0L15.3,302.1 c-20.4,20.4-20.4,53.6,0,74s53.6,20.4,74,0l154.2-154.2L397.7,376.1z"/>
							</svg>
						}
					</Link>
					{category.slug === state.category.slug && isShowSubCategories &&
						<Articles stylesKb={stylesKb} isShowTitle={false}/>
					}
				</div>
			)}
		</div>
	);
}

export default Categories;