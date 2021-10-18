import React from 'react';

class First extends React.Component {
	constructor(props) {
		super(props)
		this.state = { test: 0 }
	}
	componentDidMount = () =>
		setTimeout(() => this.setState({ test: 0 }))

	static getDerivedStateFromProps(props, state) {
		return { test: Number(props.firstprop) }
	}

	setTest = () => {
		console.log("previous test value:", this.state.test)
		console.log("set Test to", Number(this.state.test) + 1)
		this.setState({ test: Number(this.state.test) + 1 });
		console.log("subsequent test value:", this.state.test)
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		if (this.state.prev !== prevState.test) this.setState({ prev: prevState.test })
		return this.state
	}

	componentDidUpdate() {
		if (this.state.update !== this.state.test) this.setState({ update: this.state.test })
	}

	render = () => (
		<div>
			<h1>Test: <button onClick={this.setTest}>{this.state.test}</button> Component</h1>
			<h2>Previous: { this.state.prev }</h2>
			<h2>Update: { this.state.update }</h2>
		</div>
	)
}

export default First;