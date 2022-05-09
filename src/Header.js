import React from 'react';
import './Header.scss';
import Search from './Search';

const Header = ({ stylesKb, publicKb }) => {
	return (
		<header className="navbar" style={{backgroundColor: stylesKb.bgColor, color: stylesKb.fontColor}}>
			<div className="title">{publicKb.title}</div>
			<h2>{stylesKb.header}</h2>
			<div>{stylesKb.subheader}</div>
			<Search placeholder={stylesKb.searchText} publicKb={publicKb}/>
		</header>
	);
};

export default Header;
