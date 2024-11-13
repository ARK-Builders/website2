import axios from 'axios'

async function callApi() {
	let issuesList = []

	try {
		var repositories = await axios.get(
			'https://raw.githubusercontent.com/ARK-Builders/website2/main/content/issues/repos-list.json'
		)
		if (repositories.status === 200) {
			repositories = repositories.data

			for (const repo of repositories) {
				const issues = await axios.get(
					'https://api.github.com/repos/ARK-Builders/' + repo.name + '/issues'
				)

				if (issues.status === 200) {
					if (issues.data.length > 0) {
						for (const issue of issues.data) {
							var repoUrl = issue.repository_url.replace('api.', '').replace('repos/', '')
							const assignees = issue.assignees.map((element) => element.login)
							const labels = issue.labels.map((element) => element.name)
							if (assignees.length == 0 && issue.state == 'open') {
								issuesList.push({
									title: issue.title,
									labels: labels.filter(
										(item) =>
											item == 'bug' ||
											item == 'good first issue' ||
											item == 'feature' ||
											item == 'enhancement'
									),
									user: issue.user.login,
									user_avatar: issue.user.avatar_url,
									date: new Date(issue.created_at),
									repo: repoUrl,
									number: issue.number,
									platforms: repo.platforms,
									languages: repo.languages
								})
							}
						}
					}
				} else {
					throw new Error(`API request failed with status ${response.status}`)
				}
			}
			return issuesList
		} else {
			throw new Error(`API request failed with status ${response.status}`)
		}
	} catch (error) {
		throw error
	}
}

async function main() {
	const data = await callApi()
	console.log(JSON.stringify(data))
}

main()
