import React, { Component } from 'react';
import axios from 'axios'
import { saveAs } from 'file-saver';


import coupon from'./usecase/coupon.jpg';
import menu from'./usecase/menu.jpeg';
import realestate from'./usecase/realestate.png';


class App extends Component {

	constructor(){
		super()

		this.state = {
			qr:null,

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

		let size = '300x300'
		let data = this.state.data
		let color = this.state.color
		let format = "png"
		let margin = '10'

		//DOCS: http://goqr.me/api/doc/create-qr-code/
		let url = `http://api.qrserver.com/v1/create-qr-code/?data=${data}&size=${size}&format=${format}&color=${color}&margin=${margin}`

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
		let size = '300x300'
		let data = this.state.data
		let color = this.state.color
		let format = "png"
		let margin = '10'

		window.open(`http://api.qrserver.com/v1/create-qr-code/?data=${data}&size=${size}&format=${format}&color=${color}&margin=${margin}`)
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


		let errorStyle = {border:'2px solid gray'}
		if(this.state.error){
			errorStyle = {border:'2px solid red', backgroundColor:'rgb(255,0,0,.25)'}
		}


		return (
			<div style={{minHeight:'100vh', backgroundColor:'rgb(190, 200, 225)'}}>


			<div style={{width:'100%', textAlign:'center'}}>
				<i style={{padding:'20px', fontSize:'40px', color:'white'}} className="fas fa-qrcode"></i>
			</div>


			<div style={{borderRadius:'12px', backgroundColor:'white'}} className='container'>
			<div style={{padding:'10px'}} className='row'>
				<div style={{borderBottom:'1px solid lightgray', paddingTop:'10px', paddingBottom:'10px', color:'black'}} className='col-12'>
					<h4><strong>CREATE A QR CODE</strong></h4>
				</div>
				<div className='col-sm-4'>
					<br/>
					<br/>

					<p>Paste a Link*</p>
					<input style={errorStyle} placeholder='Link...' className='form-control' onChange={this.changeData.bind(this)}/>

					<br/>
					<br/>
					
					<p>Pick a Code Color</p>
					<div class="dropdown show">
						<a style={{minWidth:'200px'}} class="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						{this.state.color}
						</a>
						<div style={{minWidth:'200px'}} class="dropdown-menu" aria-labelledby="dropdownMenuLink">
							<span style={{cursor:'pointer'}} onClick={()=>this.changeColor('0-0-0')} class="dropdown-item" href="#">0-0-0 (Black)</span>
							<span style={{cursor:'pointer'}} onClick={()=>this.changeColor('255-0-0')} class="dropdown-item" href="#">255-0-0 (Red)</span>
							<span style={{cursor:'pointer'}} onClick={()=>this.changeColor('0-0-255')} class="dropdown-item" href="#">0-0-255 (Blue)</span>
						</div>
					</div>

					<br/>
					<br/>

					<hr/>
					<br/>
					<button className='btn btn-dark btn-block' onClick={this.getQR.bind(this)}>GENERATE !!</button>
					<p style={{color:'red'}}>{this.state.error}</p>
					<br/>
				</div>


				<div style={{textAlign:'center'}} className='col-sm-8'>
					<br/>

					{!this.state.qr &&
						<div style={{width:'100%'}}>
							<div style={{display:'inline-block', height:'300px', width:'300px', border:'3px dashed black'}}></div>
							<br/>
						</div>
					}

					{this.state.qr &&
					<div>
						<img src={this.state.qr} />
						<br/>
						<br/>
						<button className='btn btn-light' onClick={this.openTab.bind(this)}>Open in a Separate Tab <i style={{fontSize:'14px'}} className="fas fa-external-link-alt"></i></button>
						<p>(Test with a Camera App)</p>
					</div>
					}
					<br/>
				</div>
			</div>
			</div>


			<br/>


			<div style={{borderRadius:'12px', backgroundColor:'white'}} className='container'>
			<div style={{padding:'10px'}} className='row'>
				<div style={{borderBottom:'1px solid lightgray', paddingTop:'10px', paddingBottom:'10px', color:'black'}} className='col-12'>
					<h4><strong>USE CASES</strong></h4>
				</div>

				<div className='col-sm-4'>
					<img style={{objectFit:'cover', height:'150px', width:'100%'}} src={coupon} />
					<p>Scannable Coupons</p>
				</div>

				<div className='col-sm-4'>
					<img style={{objectFit:'cover', height:'150px', width:'100%'}} src={realestate} />
					<p>Instant Real Estate Tours</p>
				</div>

				<div className='col-sm-4'>
					<img style={{objectFit:'cover', height:'150px', width:'100%'}} src={menu} />
					<p>Touch-Free Digital Menus</p>
				</div>
			</div>
			</div>

			<br/>
			<br/>
			<br/>

			
			</div>
		)
	}


}


export default App;
