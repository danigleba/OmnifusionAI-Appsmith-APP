export default {
	async submit () {
		if (email.text && password.text) {
			await sign_up.run()
			await create_user.run()
			storeValue("email", email.text)
			storeValue("onboardingType", appsmith.URL.queryParams.onboardingType)
			showAlert('Confirmation email sent', 'succes')
			emailSent.emailSent = true
		} else showAlert('Complete all fields to sign up', 'warning');
	}
};