import React from 'react';
import { createRoot } from 'react-dom/client';
import MergelyView from './mergely.jsx';

export default function App() {
	return(
		<MergelyView
			height='200px'
			onChanged={() => {console.log('changed')}}
			onResized={() => {console.log('resized')}}
			onUpdated={() => {console.log('updated')}}
			onInit={() => {console.log('initialized')}}
		/>
	);
}

const app = document.getElementById('root');
const root = createRoot(app);
root.render(<App />);
