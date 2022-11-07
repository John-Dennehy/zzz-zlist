import List from "./components/List";

export default function ListsPage() {
	return (
		<div>
			<h1>Lists</h1>

			<div>
				<input type="text" />
				<button type="button">Add</button>
			</div>

			<List />
			
		</div>
	);
} 