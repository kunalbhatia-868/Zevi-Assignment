import React from "react";
import "./Navbar.css";
function Navbar() {
	return (
		<div className="main-navbar">
			<div className="nav-title">My Gallery</div>
			<div className="nav-searchbar">
				<input
					type="search"
					name="search"
					id=""
					placeholder="photos, people, groups"
				/>
			</div>
			<div>
				<button className="button">Login</button>
				<button className="button">Submit</button>
			</div>
		</div>
	);
}

export default Navbar;
