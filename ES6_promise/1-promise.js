/* eslint-disable */
export default function getResponseFromAPI(success) {
	return new Promise((resolve, reject) => {
		if (success === true) {
			resolve({status: 200, body: 'Success'});
		} else {
			reject(new Error('The fake API is not working currently'));
		}
	});
}
