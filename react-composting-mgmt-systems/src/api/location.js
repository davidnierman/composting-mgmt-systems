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

export const show = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + `/locations/${id}`,
        headers: {
			Authorization: `Token ${user.token}`,
		},
	})
}

export const create = (user, location) => {
	const body = {"location": location}
	console.log('this is the body: ', body)
	return axios({
		method: 'POST',
		url: apiUrl + '/locations/',
		headers: {
			Authorization: `Token ${user.token}`,
		},
		data: body
	})
}
export const edit = (user, location, id) => {
	const body = {"location": location}
	console.log('this is the body: ', body)
	return axios({
		method: 'PATCH',
		url: apiUrl + '/locations/' + id + '/',
		headers: {
			Authorization: `Token ${user.token}`,
		},
		data: body
	})
}