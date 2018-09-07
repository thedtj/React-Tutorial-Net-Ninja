const initState = {
	posts: [
		{id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint obcaecati consectetur reprehenderit voluptatibus dolores illo a quia? Sunt cum deserunt quam, quis dolores saepe pariatur beatae vitae iste, magnam nobis.'},
		{id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint obcaecati consectetur reprehenderit voluptatibus dolores illo a quia? Sunt cum deserunt quam, quis dolores saepe pariatur beatae vitae iste, magnam nobis.'},
		{id: '3', title: 'A Helix Fossil was Found', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint obcaecati consectetur reprehenderit voluptatibus dolores illo a quia? Sunt cum deserunt quam, quis dolores saepe pariatur beatae vitae iste, magnam nobis.'}
	]
};

const rootReducer = (state = initState, action) => {
	return state;
};

export default rootReducer;