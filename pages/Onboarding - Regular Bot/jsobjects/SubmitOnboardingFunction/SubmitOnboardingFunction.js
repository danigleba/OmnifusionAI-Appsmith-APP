export default {
	async submit () {
		if (manychatInvitationLink.text && personality.text && context.text && howToRespond.text && startingPoints.text && followUps.text && steps_script.text && objections.text && shortProductDescription.text && links.text && filePicker.files) {
			await sign_up.run()
			await upload_files_to_supabase_stora.run()
			onboardingFilled.onboardingFilled = true
		} else showAlert('Complete all fields to continue', 'warning');
	}
};