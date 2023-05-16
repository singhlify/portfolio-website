import axios from "axios";

const getProjects = async (req, res) => {
	const backendURL =
		"https://gh-pinned-repos.onrender.com/singhlify?needRepoImage=true&needGhApiData=false";

	const result = await axios.get(backendURL);
	res.status(200).json(result.data);
};

export default getProjects;
