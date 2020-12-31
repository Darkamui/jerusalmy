import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
//Import Components
import Nav from "./components/Nav";
//Import Styles
import "./styles/app.scss";
//Import Utils
import Landing from "./components/Landing";
import Ouvrages from "./pages/Ouvrages";
import LibraryBook from "./pages/LibraryBook";
import About from "./pages/About";
import Text from "./components/Text";
import { AnimatePresence } from "framer-motion";

export default function App() {
	const location = useLocation();
	//State
	const [libraryStatus, setLibraryStatus] = useState(false);

	return (
		<div>
			<Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />

			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path='/' exact>
						<Landing />
						<Text />
					</Route>

					<Route path='/ouvrages' exact>
						<Ouvrages />
					</Route>
					<Route path='/auteur' exact>
						<About />
					</Route>
					<Route path='/:id'>
						<LibraryBook />
					</Route>
				</Switch>
			</AnimatePresence>

			{/* <Book currentBook={currentBook}/>
            <Library books={books} libraryStatus={libraryStatus}  currentBook={currentBook} setCurrentBook={setCurrentBook}/> */}
		</div>
	);
}
