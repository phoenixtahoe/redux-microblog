import {
	FETCH_POST,
	FETCH_TITLES,
	REMOVE_POST,
	ADD_POST,
	UPDATE_POST,
	VOTE,
	ADD_COMMENT,
	REMOVE_COMMENT,
} from "./actionTypes";

function sortByVote(posts) {
	return posts.sort((a, b) => b.votes - a.votes);
}

export default function rootReducer(state = {}, action) {
	let p = state[action.postId];

	switch (action.type) {
		case FETCH_TITLES:
			return sortByVote([...action.titles]);
		case FETCH_POST:
			return { ...state, [action.post.id]: action.post };

		case ADD_POST:
			return {
				...state,
				[action.post.id]: { ...action.post, comments: [] },
			};

		case UPDATE_POST:
			return {
				...state,
				[action.post.id]: {
					...action.post,
					comments: state[action.post.id].comments,
				},
			};

		case REMOVE_POST:
			let posts = { ...state };
			delete posts[action.postId];
			return posts;

		case VOTE:
			return sortByVote(
				state.map((title) =>
					title.id === action.postId
						? { ...title, votes: action.votes }
						: title
				)
			);

		case ADD_COMMENT:
			return {
				...state,
				[action.postId]: {
					...p,
					comments: [...p.comments, action.comment],
				},
			};

		case REMOVE_COMMENT:
			return {
				...state,
				[action.postId]: {
					...p,
					comments: p.comments.filter(
						(c) => c.id !== action.commentId
					),
				},
			};

		default:
			return state;
	}
}
