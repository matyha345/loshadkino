import axios from 'axios'

import { API_URL } from '../api/api'

axios.defaults.baseURL = API_URL

export const LocalSendMessageEmail = {
	async submitData(data) {
		const response = await axios.post('/submit', data, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
		return response.data
	}
}
