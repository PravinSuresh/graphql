import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import "./App.css";
import { useState } from "react";

// 1. Define TS type for the query result:
interface Post {
	id: string;
	title: string;
	body: string;
}

interface GetPostsData {
	posts: {
		data: Post[];
	};
}

const GET_POSTS = gql`
	query {
		posts(options: { paginate: { page: 1, limit: 5 } }) {
			data {
				id
				title
				body
			}
		}
	}
`;
const App: React.FC = () => {
	const { loading, error, data } = useQuery<GetPostsData>(GET_POSTS);
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	console.log("data", data);

	if (loading) return <p>Loading posts...</p>;
	if (error) return <p>Error: {error.message}</p>;
	return (
		<>
			<h1>Learn GraphQL</h1>
			<div className='p-4 max-w-xl mx-auto'>
				<h2 className='text-2xl font-bold mb-4'>Posts</h2>
				<ul className='space-y-3 mb-6'>
					{data?.posts.data.map((post: any) => (
						<li
							key={post.id}
							className='border p-3 rounded shadow-sm'>
							<h2 className='font-semibold'>{post.title}</h2>
							<p className='text-sm text-gray-600'>{post.body}</p>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default App;
