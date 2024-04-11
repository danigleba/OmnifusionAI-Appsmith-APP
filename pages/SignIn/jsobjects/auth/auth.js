export default {
	signIn: () => {
		try {
			return sign_in.run()
			.then(() => storeValue("email", email.text))
			.then(() => navigateTo("Home"))
		} catch (error) {
			showAlert('Incorrect credentials', 'warning');
		}
	}
}