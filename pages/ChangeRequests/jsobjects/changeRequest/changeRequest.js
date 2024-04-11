export default {
	async submitNewRequest () {
			if (get_change_requests.data.filter(request => request.property_date.includes("April")).length < 3) {
				await submit_change_request.run()
				navigateTo(appsmith.URL.fullPath)
			} else showAlert("You've already spend all your requests this month")
	},
	
	async getAllRequests () {
			await get_change_requests.run()
			const previusChangeRequest = []
			get_change_requests.data.forEach(object => {
				if (object.name == appsmith.store.email) {
					previusChangeRequest.push(`· ${object.property_date} -  ${object.property_status}`)
				}
			})
			storeValue("changeRequests", previusChangeRequest)
	}
}