import React,{ useState,useRef,useEffect } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { BiCart } from 'react-icons/bi'
import { AiFillHeart } from 'react-icons/ai'
import { AiFillSetting } from 'react-icons/ai'
import { FaPencilAlt } from 'react-icons/fa'

import './styles.css'
import Cars from "./Cars.js"

const Home = (props) =>{
	
	const [cartNum,setCartNum] = useState(0) 
	const [likesNum,setLikesNum] = useState(0) 
	const [currentTab,setCurrentTab] = useState("home")
	// const [my_cart,set_my_cart] = useState([])
	// const [previousTab,setPreviousTab] = useState(currentTab)

	const homeLinkRef = useRef()
	const cartLinkRef = useRef()
	const settingsLinkRef = useRef()
	const aboutLinkRef = useRef()

	const changeTab = (event) =>{
		setCurrentTab(event.target.title);
		
	}

	// const receive_cart = (cart_data) =>{
	// 	set_my_cart(cart_data)
	// 	console.log(`${cart_data} received`)
	// }
	return(
		<div className = "home">
			<div className = "desktop_side_nav">

				<div className = "nav_user_details">
					<FaUserCircle id = "user_icon" color = "#EEEEEE" />
					<h3 id = "username_h3">{props.user_name}</h3>
					<ul id = "user_details_ul">
						<li className = "user_details_item"><AiFillHeart color="#d9534f"/> {likesNum}</li>
						<li className="user_details_item"><BiCart id="nav_cart_icon" width = "40"/> {cartNum}</li>
					</ul>
				</div>

				<div className = "desktop_side_links">
					<ul>
						<li ref = {homeLinkRef} onClick = {changeTab} title = "home" className="side_nav_link"><AiFillHome/> Home</li>
						<li ref = {cartLinkRef} onClick = {changeTab} title = "my_cart" className="side_nav_link"><BiCart/> My Cart</li>
						<li ref = {settingsLinkRef} onClick = {changeTab} title = "settings" className="side_nav_link"><AiFillSetting/> Settings</li>
						<li ref = {aboutLinkRef} onClick = {changeTab} title = "about" className="side_nav_link"><FaPencilAlt/> About Author</li>
					</ul>
				</div>

			</div>


			<div className = "car_horizontal_slide">
				<Cars/>
				
			</div>
		</div>
	)
}

export default Home