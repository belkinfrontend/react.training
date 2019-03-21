import React, { Component } from 'react';
import styles from './LoaderComponent.module.scss';

export class LoaderComponent extends Component {
	render() {
		return (
			<div className={styles.cssloadContainer}>
				<div className={styles.cssloadWhirlpool} />
			</div>
		);
	}
}

export default LoaderComponent;
