import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";
import ImageList from './imageList'
class App extends React.Component {

	state={images:[]}


	  onSubmitInputHandle=async (term)=>{
		const response=await axios.get('https://api.unsplash.com/search/photos',{
			params:{query:term},
			headers:{
				Authorization: 'Client-ID c650d370f4c087c4eeb7cfe9c1632bd717caa06cd02d4074c46439f194dc9327'
			}
		});
		this.setState({images:response.data.results})
	}
	render() {
		return (
			<div className="container">
				<SearchBar onSubmitInput={this.onSubmitInputHandle} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
