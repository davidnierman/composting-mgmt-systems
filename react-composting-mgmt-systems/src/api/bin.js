import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexBinByLocation = (user, locationId) => {
    const body = 
    {
        "location": 
            {
              "id": locationId
            }
    }
    console.log('indexBinsLocation Request Body:', body)
	return axios({
		method: 'POST',
		url: apiUrl + '/bins/',
        headers: {
			Authorization: `Token ${user.token}`
		},
        // for some reason this data is not being attached to the request...
        data: body
	})
}