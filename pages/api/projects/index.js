import axios from "axios";

const getProjImgs = async (req, res) => {
	const projURL = req.query.projURL;
	try {
		const response = await axios.get(projURL);
		const projectImg = response.data
			.split('og:image" content="')[1]
			.split('" />')[0];

		res.status(200).json({
			img: projectImg,
		});
	} catch (error) {
		res.status(400).json({
			error: error,
		});
	}
};

export default getProjImgs;
