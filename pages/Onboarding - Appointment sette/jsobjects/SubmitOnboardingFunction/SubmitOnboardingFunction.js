export default {
	async submit () {
		if (manychatInvitationLink.text && googleCalendarLink.text && timeZone.text && personality.text && context.text && howToRespond.text && startingPoints.text && followUps.text && steps_script.text && objections.text && shortProductDescription.text && links.text && filePicker.files) {
			await sign_up.run()
			await upload_files_to_supabase_stora.run()
			storeValue(onboardingFilled, true) 
			onboardingFilled.onboardingFilled = true
			navigateTo(appsmith.URL.fullPath)
		} else showAlert('Complete all fields to continue', 'warning');
	}
};