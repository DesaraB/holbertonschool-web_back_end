/*eslint-disable*/

export default function getFullResponseFromAPI(success) {
	return new Promise((resolve, reject) => {
		const success = false;
		if (success) {
			resolve({status: 200, body: 'Success'});
		} else {
			reject(new Error('The fake API is not working currently'))
		}
	});
}
