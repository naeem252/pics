import React from 'react';

class ImageCard extends React.Component{
	constructor(props){
		super(props)
		this.state={span:0,height:null}
		this.imageRef=React.createRef()
	}
	componentDidMount(){
		// console.log(this.imageRef);
		// console.log(this.imageRef.current);
		this.imageRef.current.addEventListener('load',this.setSpan);

	}
	setSpan=()=>{
		console.log(this.imageRef.current.clientHeight);
		const height=this.imageRef.current.clientHeight;
		const span=Math.floor(height/200);
		const fake=height/200;
		this.setState({span,height:span>1?`100%`:null});

	}
	render(){
		const { description,urls}=this.props.image;
		return(
			  <div style={{gridRowEnd:`span ${this.state.span}`}}>
			  	<img style={{height:this.state.height}} className="img-fluid" ref={this.imageRef} src={urls.regular} alt={description} title={description}/>
			  </div>
			)
	}
}

export default ImageCard;