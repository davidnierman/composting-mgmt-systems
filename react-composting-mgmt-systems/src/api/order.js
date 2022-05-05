import apiUrl from '../apiConfig'
import axios from 'axios'

export const createOrder = (user, order) => {
	const body = {"order_bin": order}
	return axios({
		method: 'POST',
		url: apiUrl + '/order_bins/',
		headers: {
			Authorization: `Token ${user.token}`,
		},
		data: body
	})
}