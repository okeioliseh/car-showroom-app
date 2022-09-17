const URL = "https://pixabay.com/api/?key="
const API_KEY = "29710637-96b99fd60b95f210d0480c4b4"

export const fetchCar = async() =>{
	const data =  await fetch(`${URL}${API_KEY}&q=lamborghini&image_type=photo`)
	.then((response) => response.json())
	return data
}