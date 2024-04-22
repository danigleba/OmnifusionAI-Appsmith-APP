export default {
export default {
	async getData() {
		await get_all_users.run()
		await storeValue("userData",  get_all_users.data.find(obj => obj.email === appsmith.store.email))
		if (get_all_users.data.find(obj => obj.email === appsmith.store.email).onboarding.onboardingCompleted == true) return 
		if (get_all_users.data.find(obj => obj.email === appsmith.store.email).userType == "Regular") navigateTo("Onboarding - Regular Bot") 
		else navigateTo("Onboarding - Appointment sette") 
		
	}
}