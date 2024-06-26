export default {
	async calculateAverageDailyChange() {
		let totalChange = 0;
		await get_all_users.run()
		const data = get_all_users.data.find(obj => obj.email === appsmith.store.email).statistics.leadsResponded
		// Iterate over the array starting from the second element
		for (let i = 1; i < data.length; i++) {
			// Calculate the difference between consecutive days
			const change = data[i].y - data[i - 1].y;
			totalChange += change;
		}

		// Calculate the average daily change
		const averageChange = totalChange / (data.length - 1);
		storeValue("dailyAverageLeadsResponded", averageChange)
		return averageChange;
	}  
}