export default {
	async numberOfConvos () {
		await get_mongodb_collection.run()
		storeValue("numberOfConvos", get_mongodb_collection.data.length)
	},
	async numberOfAIMessages () {
		//Get total AI messages
		function countAIMessages(messages) {
			let aiMessageCount = 0;
			for (const message of messages) {
				if (message.type === 'ai') {
					aiMessageCount++;
				}
			}
			return aiMessageCount;
		}

		// Function to sum up AI messages across all objects
		function sumAIInAllObjects(data) {
			let totalAIMessages = 0;
			for (const obj of data) {
				totalAIMessages += countAIMessages(obj.messages);
			}
			return totalAIMessages;
		}

		// Get the total number of AI messages across all objects
		const totalAIMessages = sumAIInAllObjects(get_mongodb_collection.data);
		storeValue("numberOfAIMessages", totalAIMessages)
	}
}