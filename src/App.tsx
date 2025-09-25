import { gql } from "@apollo/client";
import { useQuery, useMutation } from "@apollo/client/react";
import "./App.css";
import { useState, type JSX } from "react";

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
function App(): JSX.Element {
	const { loading, error, data, refetch } = useQuery(GET_POSTS);
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	if (loading) return <p>Loading posts...</p>;
	if (error) return <p>Error: {error.message}</p>;
	return (
		<>
			<h1>Learn GraphQL</h1>
		</>
	);
}

export default App;
