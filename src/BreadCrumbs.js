import React from 'react';
import {Link} from 'react-router-dom';

const BreadCrumbs = ({ stylesKb, crumbs }) => {
	return (
		<div className="bread-crumbs" style={{color: stylesKb.brandColor}}>
			{crumbs && crumbs.map((crumb, i) =>
				<div key={i}>
					{i !== 0 && '/'}
					<Link className="crumb" to={`${crumb.url}`}>
						{crumb.title}
					</Link>
				</div>
			)}
		</div>
	);
};

export default BreadCrumbs;
