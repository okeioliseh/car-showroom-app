import React,{useState,useRef,useEffect} from 'react'
import './styles.css'
import Button from 'react-bootstrap/Button'
import car1 from './img_assets/car1.jpg'

import { BiCart } from 'react-icons/bi'
import { AiFillHeart } from 'react-icons/ai'

const Car = (props) => {

	const [isLiked,setIsLiked] = useState(false);
	const [inCart,setInCart] = useState(false);

	const [icon_color,set_icon_color] = useState("#f7f7f7");
	const [cart_text,set_cart_text] = useState("Add To Cart")
	const [car_name,set_car_name] = useState("Lamborghini")


	const like_img = () =>{
		setIsLiked(!isLiked)
		
	}
	const add_to_cart = () =>{
		setInCart(true);


	}
	const update_cart = (cart_data,add_or_not,car_index_num) =>{
		props.update_cart(cart_data,add_or_not,car_index_num)
	}

	// For like btn componentDidUpdate {

	useEffect(()=>{
		if(isLiked === true){
			set_icon_color("#d9534f")

		}else{
			set_icon_color("#f7f7f7")

		}
	},[isLiked])

	// }


	useEffect(()=>{
		if(inCart === true){
			set_cart_text("Added To Cart")

			// adds task if second argument is true
			// update_cart(car_name,props.data.webformatURL,true,props.car_index);

		}
		// else{
		// 	set_cart_text("Add To Cart")
		// 	update_cart(,false,props.car_index);
		// }
	},[inCart])

	return(
		<div key = {props.data.id} className = "image_container">
			<img className = "slide_image" src = {props.data.webformatURL} alt = "car"/>

			<div className = "slide_car_props_div">
				<div className = "car_name_model_div">
					<h3 className = "car_name_h3">{car_name}</h3>
					{/*<h4 className = "car_model">{props.data.tags}</h4>*/}
				</div>
				<Button onClick = {add_to_cart} className = "cart_btn"  variant = "success">{cart_text} <BiCart/> </Button>
				<Button variant = "dark" className = "like_btn"> <AiFillHeart color = {icon_color} onClick = {like_img}  className = "like_icon"/> </Button>
			</div>
		</div>
	)
}

export default Car
			