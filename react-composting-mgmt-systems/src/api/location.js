import apiUrl from '../apiConfig'
import axios from 'axios'


export const index = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/locations/',
        headers: {
			Authorization: `Token ${user.token}`,
		},
	})
}