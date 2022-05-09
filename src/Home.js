import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = ({ publicKb, featuredArticles, stylesKb }) => {
	return (
		<div className="content">
			<div className="section">
				{Boolean(featuredArticles.length) &&
					<div className="kb-item">
						<div className="section-title">Featured Articles</div>
						<div className="count-articles">{featuredArticles.length} articles</div>
						{featuredArticles.map(article =>
							<div className="article" style={{color: stylesKb.brandColor}} key={article.id}>
								<Link
									to={`/articles/${article.slug}`}
									state={{section: article.section, category: article.category}}
								>
									{article.title}
								</Link>
							</div>
						)}
					</div>
				}
				{publicKb.publicSections.map(section =>
					<div key={section.id}>
						<div className="section-title">{section.title}</div>
						{section.publicCategories &&
							<div className="wrap-row">
								{section.publicCategories.map(category =>
									<Link className="kb-item"
									      to={`/section/${section.slug}/category/${category.slug}`}
									      state={{section, category}}
									      key={category.id}
									>
										<div className="title">{category.title ? category.title : <span>Default</span>}</div>
										<div className="description">{category.description}</div>
										{category.publicArticles.length > 0 &&
											<div className="count">
												{category.publicArticles.length} articles
											</div>
										}
									</Link>
								)}
							</div>
						}
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
