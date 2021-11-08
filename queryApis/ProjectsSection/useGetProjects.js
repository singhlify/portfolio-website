// Reference: https://www.youtube.com/watch?v=nnBaERWIDl0&list=LL&index=2
// Reference: https://github1s.com/tannerlinsley/react-query-blog-refactor-example/blob/HEAD/hooks/useDeletePost.js
// Reference: https://betterprogramming.pub/7-tips-for-using-react-query-in-large-projects-22ccc49d61c2

import axios from "axios";
// import { useMutation } from "react-query";

const getProjects = async ({ recruiterId, creditAmount }) => {
	try {
		const user = {
			recruiter_id: recruiterId,
			amount: creditAmount,
		};
		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}/api/admin/addCredits`,
			user
		);
		return response;
	} catch (error) {
		return error;
	}
};

export default function useGetProjects() {
	return useMutation((recruiterData) => getProjects(recruiterData));
}
