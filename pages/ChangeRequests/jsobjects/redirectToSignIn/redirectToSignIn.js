export default {
	redirectToSignIn () {
		if (appsmith.store.email) return
		navigateTo("SignIn")
	},
}