import React, { Component } from 'react';
import axios from 'axios'
import { saveAs } from 'file-saver';


class App extends Component {

	constructor(){
		super()

		this.state = {
			qr:null,

			size:'250',
			color:'0-0-0',
			data:'',

			error:'',
		}
	}


	getQR() {
		if(!this.state.data){
			this.setState({error:'A Link is Required'})
			return
		}

		let size = this.state.size + 'x' + this.state.size
		let data = this.state.data
		let color = this.state.color
		let format = "png"

		//DOCS: http://goqr.me/api/doc/create-qr-code/#param_format
		let url = `http://api.qrserver.com/v1/create-qr-code/?data=${data}&size=${size}&format=${format}&color=${color}`

		this.setState({qr:url})
	}




	changeData(e){
		this.setState({data:e.target.value, error:''})
	}

	changeSize(value){
		this.setState({size:value})
	}

	changeColor(value){
		this.setState({color:value})
	}




	openTab() {
		let size = this.state.size + 'x' + this.state.size
		let data = this.state.data
		let color = this.state.color
		let format = "png"

		window.open(`http://api.qrserver.com/v1/create-qr-code/?data=${data}&size=${size}&format=${format}&color=${color}`)
	}




	// download() {
	// 	let download = document.createElement('a');

	// 	let size = this.state.size
	// 	let data = this.state.data
	// 	let color = this.state.color
	// 	let format = "png"

	// 	//DOCS: http://goqr.me/api/doc/create-qr-code/#param_format

	// 	download.href = `http://api.qrserver.com/v1/create-qr-code/?data=${data}&size=${size}&format=${format}&color=${color}`
	// 	download.download = 'download.png';
	// 	download.click();
	// }



	// testDownload(){
	// 	fetch('https://jsonplaceholder.typicode.com/todos/1')
	// 	  .then(resp => resp.blob())
	// 	  .then(blob => {
	// 	    const url = window.URL.createObjectURL(blob);
	// 	    const a = document.createElement('a');
	// 	    a.style.display = 'none';
	// 	    a.href = url;
	// 	    // the filename you want
	// 	    a.download = 'todo-1.json';
	// 	    document.body.appendChild(a);
	// 	    a.click();
	// 	    window.URL.revokeObjectURL(url);
	// 	    alert('your file has downloaded!'); // or you know, something with better UX...
	// 	  })
	// 	  .catch(() => alert('oh no!'));
	// }






	render(){


		let errorStyle = null
		if(this.state.error){
			errorStyle = {border:'1px solid red', backgroundColor:'rgb(255,0,0,.25)'}
		}


		return (
			<div className='container'>
			
			<br/>

			<div className='row'>
				<div style={{paddingTop:'5px', borderBottom:'4px solid darkgray', backgroundColor:'black', color:'white'}} className='col-12'>
					<h4><i style={{fontSize:'16px'}} className="fas fa-qrcode"></i> QR CODE GENERATOR</h4>
				</div>

				<div className='col-sm-6'>
					<br/>
					<br/>

					<p>Paste a Link *</p>
					<input style={errorStyle} placeholder='Link...' className='form-control' onChange={this.changeData.bind(this)}/>

					<br/>
					<br/>

					<p>Size (Pixels)</p>
					<div class="dropdown show">
						<a  style={{minWidth:'200px'}} class="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						{this.state.size}px
						</a>
						<div style={{minWidth:'200px'}} class="dropdown-menu" aria-labelledby="dropdownMenuLink">
							<a onClick={()=>this.changeSize('250')} class="dropdown-item" href="#">250px</a>
							<a onClick={()=>this.changeSize('500')} class="dropdown-item" href="#">500px</a>
						</div>
					</div>

					<br/>
					<br/>
					
					<p>Color</p>
					<div class="dropdown show">
						<a style={{minWidth:'200px'}} class="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						{this.state.color}
						</a>
						<div style={{minWidth:'200px'}} class="dropdown-menu" aria-labelledby="dropdownMenuLink">
							<a onClick={()=>this.changeColor('0-0-0')} class="dropdown-item" href="#">(Black) 0-0-0</a>
							<a onClick={()=>this.changeColor('255-0-0')} class="dropdown-item" href="#">(Red) 255-0-0</a>
							<a onClick={()=>this.changeColor('0-0-255')} class="dropdown-item" href="#">(Blue) 0-0-255</a>
						</div>
					</div>

					<br/>
					<br/>

					<hr/>
					<button className='btn btn-dark btn-block' onClick={this.getQR.bind(this)}>CREATE MY QR !</button>
					<br/>
					<p style={{color:'red'}}>{this.state.error}</p>
					<br/>
				</div>


				<div style={{textAlign:'center'}} className='col-sm-6'>
					<br/>

					{!this.state.qr &&
						<div style={{width:'100%'}}>
							<div style={{display:'inline-block', height:this.state.size+'px', width:this.state.size+'px', border:'4px dashed black'}}></div>
						</div>
					}

					{this.state.qr &&
					<div>
						<img src={this.state.qr} />
						<br/>
						<br/>
						<button className='btn btn-light' onClick={this.openTab.bind(this)}>Open in a Separate Tab <i style={{fontSize:'16px'}} className="fas fa-external-link-alt"></i></button>
						<p>( Test with Camera App )</p>
					</div>
					}
				</div>


			</div>
			</div>
		)
	}


}


export default App;
