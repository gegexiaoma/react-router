import React from 'react';
import {connect} from 'react-redux';

const About = ({aboutme}) => {
	return (
	<div>
		<h2>About Me</h2>
		<b>{aboutme}</b>
	</div>
	);
};
const mapStateToProps = (state) => ({aboutme: state.aboutme});

export default connect(mapStateToProps)(About);