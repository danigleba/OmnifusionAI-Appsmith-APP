export default {
	async getData() {
		await get_all_users.run()
		await storeValue("userData",  get_all_users.data.find(obj => obj.email === appsmith.store.email))
		if (get_all_users.data.find(obj => obj.email === appsmith.store.email).onboardingCompleted == true) navigateTo("Home")
		if (get_all_users.data.find(obj => obj.email === appsmith.store.email).manychatInvitationLink) onboardingFilled.onboardingFilled = true
	}
}