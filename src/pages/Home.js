import React from 'react';
import {connect} from 'react-redux';

const Home = ({greetings}) => {
	return (
	<div>
		<h1>首页</h1>
		<h3>{greetings}</h3>
	</div>
	);
};
const mapStateToProps = (state) => ({greetings: state.greetings});

export default connect(mapStateToProps)(Home);