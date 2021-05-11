import axios from 'axios'; 

const api = {
	getEmployees: () =>{
		return axios.get('https://randomuser.me/api/?results=20&nat=us')
	}
}

export default api; 