import React from 'react';
import './Editor.scss';

const Editor = ({ body }) => {
	return (
		<div className="ql-container">
			<div className="ql-editor" dangerouslySetInnerHTML={{ __html: JSON.parse(body) }}/>
		</div>
	);
};

export default Editor;
