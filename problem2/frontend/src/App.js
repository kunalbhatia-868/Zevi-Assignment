import { useState,useEffect } from "react";
import "./App.css";
import ImageCard from "./components/ImageCard/ImageCard"


function App() {
	const [imageData,setImageData]=useState([])
	const [keyword,setKeyword]=useState('')

	useEffect(()=>{
		fetch("api/search/horses")
		.then(response=>response.json())
		.then(data=>{
				setImageData(data);
			})
	},[])

	const handleChange=(e)=>{
		setKeyword(e.target.value);
	}
	return (
		<div className="App">
			<div className="main-navbar">
				<div className="nav-title">My Gallery</div>
				<div className="nav-searchbar">
					<input
						type="search"
						name="search"
						id=""
						placeholder="photos, people, groups"
						onChange={handleChange}
					/>
				</div>
				<div>
					<button className="button">Login</button>
					<button className="button">Submit</button>
				</div>
			</div>
			<div className="image-set">
			{imageData.map(singleImageData=>{
				return <ImageCard key={singleImageData.id} singleImageData={singleImageData}/>
			})}
			</div>
		</div>
	);
}

export default App;
