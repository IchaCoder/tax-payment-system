import React from "react";
import { IoIosArrowBack } from "react-icons/all";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../firebase";
import { useGlobalContext } from "../../context";
import NotVerified from "../../component/auth/NotVerified";

const Login = () => {
	const navigate = useNavigate();
	const auth = getAuth(app);
	const {
		setPending,
		setIsEmailVerified,
		isEmailVerified,
		loginError,
		setLoginError,
	} = useGlobalContext();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string().email("Invalid email address").required("Required"),
			password: Yup.string()
				.min(6, "Too short")
				.required("Password is required"),
		}),
		onSubmit: ({ email, password }, { resetForm }) => {
			setLoginError(false);
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					if (!user.emailVerified) {
						setPending(false);
						setIsEmailVerified(false);
						return;
					}

					localStorage.setItem(
						"userInfo",
						JSON.stringify({
							name: user.displayName,
							email: user.email,
							verified: user.emailVerified,
						})
					);

					navigate("/");
					// ...
				})
				.catch((error) => {
					// const errorCode = error.code;
					const errorMessage = error.message;
					setLoginError(true);
					console.log(errorMessage);
				});
			resetForm();
		},
	});

	if (!isEmailVerified) {
		return <NotVerified />;
	}

	return (
		<div className="max-w-pref bg-gray-200 m-auto relative filter rounded-lg md:w-1/2 lg:w-lg mt-10">
			<div className="bg-primary absolute w-full h-3 rounded-lg -z-10 -top-1"></div>
			<header className="flex md:block gap-4 p-4">
				<button
					onClick={() => navigate(-1)}
					className="rounded-lg md:hidden grid hover:shadow-inner2 transition-all duration-500 w-8 h-8 bg-primary place-items-center"
				>
					<IoIosArrowBack className="text-white" />
				</button>
				<h2 className="font-bold text-2xl text-center">Login</h2>
			</header>
			{loginError && (
				<div className="bg-red-400 w-[75%] mx-auto text-center p-1 mt-4 text-white text-sm tracking-wide">
					Error, please try again
				</div>
			)}

			<form
				className="p-4 mt-6 max-w-pref m-auto"
				onSubmit={formik.handleSubmit}
			>
				<input
					type="email"
					name="email"
					placeholder="Enter Email"
					className="form-input w-pref h-8 my-4 mx-auto flex justify-center focus:bg-inputBg text-sm"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>
				{formik.touched.email && formik.errors.email ? (
					<div className="text-xxs md:pl-6 text-red-700 pl-4">
						{formik.errors.email}
					</div>
				) : null}
				<input
					type="password"
					name="password"
					placeholder="Enter Password"
					className="form-input w-pref flex justify-center h-8 my-4 mx-auto focus:bg-inputBg"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.password}
				/>
				{formik.touched.password && formik.errors.password ? (
					<div className="text-xxs text-red-700 pl-4 md:pl-6">
						{formik.errors.password}
					</div>
				) : null}
				<button
					className={`log p-2 my-10 w-pref flex justify-center gap-3 mx-auto uppercase  rounded-lg bg-primary  text-white hover:shadow-inner2 transition-all duration-500 disabled:cursor-not-allowed disabled:bg-gray-400`}
					type="submit"
					// disabled={disabled}
				>
					Log in
				</button>
			</form>
			<h4 className="text-center -mt-6">
				Don't have an account?{" "}
				<Link to="/signup" className="text-primary">
					Create account
				</Link>{" "}
			</h4>
			{/* <Link to="" className="text-primary grid justify-items-center mt-2">
				Forgot Password?
			</Link> */}
			<div className="p-5"></div>
		</div>
	);
};

export default Login;
