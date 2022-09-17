import React,{ useState,useEffect } from 'react'
import { fetchCar } from './fetchCar.js'
import './styles.css'
import Car from './Car.js'

const Cars = (props) => {
	const [image_data,set_image_data] = useState([])

		// const [image_data,set_image_data] = useState([
		// {id : 0,name : "Lamborghini", model : "Murcielago"},
		// {id : 1,name : "Mercedes Benz", model : "Brabus"},
		// {id : 2,name : "Pagani", model : "Hyura" },
		// {id : 3,name : "Ferrari", model : "LaFerrari"},
		// {id : 4,name : "Lamborghini", model : "Gallardo"},
		// {id : 5,name : "Bugatti", model : "La Voiture Noire"},
		// {id : 6,name : "Hyundai", model : "I don't know"},
		// {id : 7,name : "Toyota", model : "Corolla"},
		// {id : 8,name : "Lamborghini", model : "Aventador"},
		// {id : 9,name : "Bugatti", model : "Chiron"},
		// ])

	const [my_cart,set_my_cart] = useState([])

	useEffect(()=>{
		(async() =>{
			const data = await fetchCar()
			set_image_data(data.hits)
			console.log(image_data)
			console.log(data.hits)
		})();

	},[])

	// const update_cart = (cart_,add_or_not,car_index_num) =>{
		// if(add_or_not){
			// set_my_cart([...my_cart,cart_data])
			// console.log(my_cart)
			// console.log(cart_data)

		// props.send_cart(my_cart);
		// }
	// }

	// useEffect(()=>{
	// },[my_cart])


	return(
		<div className = "car">
			{image_data.map((image,index) =>{
				return (
					<Car car_index = {index} key = {index} data = {image}/>
				)
			})}
			
		</div>
	)
}

export default Cars