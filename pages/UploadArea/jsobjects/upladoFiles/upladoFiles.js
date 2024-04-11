export default {
	async uploadFiles () {
			await upload_files.run()
			navigateTo(appsmith.URL.fullPath)
	}
}