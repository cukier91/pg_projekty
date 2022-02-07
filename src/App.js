import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";

import Navi from "./containers/Nav";
import Carousels from "./containers/Carousel";
import ShopList from "./containers/ShopList";
import Pricing from "./containers/Pricing";
import Contact from "./containers/Contact";
import AdminPanel from "./containers/AdminPanel";



function App() {
	return (
		<Routers>
			<Navi/>
			<Routes>
				<Route path="/" element={<Carousels/>}/>
				<Route path="shop" element={<ShopList/>}/>
				<Route path="pricing" element={<Pricing/>}/>
				<Route path="contact" element={<Contact/>}/>
				<Route path="admin" element={<AdminPanel/>}/>
			</Routes>
		</Routers>
	);
}

export default App;
