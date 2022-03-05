import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";

import Navi from "./containers/Nav";
import Carousels from "./containers/Carousel";
import ShopList from "./containers/ShopList";
import Pricing from "./containers/Pricing";
import Contact from "./containers/Contact";
import AdminPanel from "./containers/AdminPanel";
import SignUp from "./containers/SignUp";
import Basket from "./containers/Basket";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<Routers>
				<Navi />
				<Routes>
					<Route path="/" element={<Carousels />} />
					<Route path="shop" element={<ShopList />} />
					<Route path="contact" element={<Contact />} />
					<Route path="admin" element={<AdminPanel />} />
					<Route path="signup" element={<SignUp />} />
					<Route path="basket" element={<Basket/>}/>
				</Routes>
			</Routers>
		</Provider>
	);
}

export default App;
