import axios from 'axios'

import { API_URL } from '../api/api'

axios.defaults.baseURL = API_URL

export const LocalGalleryPicture = {
	async getImages() {
		const response = await axios.get('/photos')
		return response.data
	}
}
