import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const BlogPost = (props) => {
const {clearUrl} = props;

	const router = useRouter();

	// const { article } = router.query;

	return(
	<Layout>

	</Layout>
	);
};

export default BlogPost;