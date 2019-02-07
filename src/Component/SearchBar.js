import React from "react";

class SearchBar extends React.Component {
	constructor(props){
		super(props)
		this.onSubmitHandle=this.onSubmitHandle.bind(this)
	}
	state = {
		term:''
	};
	// onInputChange(e){
	// 	this.setState({term:e.target.value})
	// }
	onSubmitHandle(e){
		e.preventDefault();
		this.props.onSubmitInput(this.state.term);
		this.setState({term:''})
		// document.getElementById('search').focus()
	}

	render() {
		return (
			<div className="card mt-2">
				<div className="card-body">
					<form action="" onSubmit={this.onSubmitHandle}>
						<div className="form-group">
							<label htmlFor="search">Search:</label>
							<input
								type="text"
								id="search"
								value={this.state.term}
								className="form-control"
								onChange={(e)=>this.setState({term:e.target.value})}
							/>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default SearchBar;
