import Nav from "./component/home/Nav";
import Error from "./pages/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Register/Login";
import Signup from "./pages/Register/Signup";
import Home from "./pages/home/Home";
import Protectedroute from "./ProtectedRoute";
import Landing from "./pages/landing/Landing";
import Payment from "./pages/payment/Payment";
import MobileMoney from "./component/payment/MobileMoney";
import Card from "./component/payment/Card";
import PrintPage from "./pages/print/PrintPage";

function App() {
	return (
		<Router>
			<>
				<div className="App">
					<Nav />
					<Routes>
						<Route path="/landing" element={<Landing />} />
						<Route
							path="/"
							element={
								<Protectedroute>
									<Home />
								</Protectedroute>
							}
						/>

						<Route path="*" element={<Error />} />
						<Route path="login" element={<Login />} />
						<Route path="signup" element={<Signup />} />
						<Route path="payment" element={<Payment />}>
							<Route path="mobilemoney" element={<MobileMoney />} />
							<Route path="card" element={<Card />} />
						</Route>
						<Route path="print" element={<PrintPage />} />
					</Routes>
				</div>
			</>
		</Router>
	);
}

export default App;
