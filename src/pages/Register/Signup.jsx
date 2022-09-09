import React from "react";
import { IoIosArrowBack } from "react-icons/all";
import { Link, useNavigate } from "react-router-dom";
import {
	createUserWithEmailAndPassword,
	getAuth,
	updateProfile,
	sendEmailVerification,
} from "firebase/auth";
import { app } from "../../firebase";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useGlobalContext } from "../../context";
import Redirecting from "../../component/auth/Redirecting";

const Signup = () => {
	const auth = getAuth(app);
	const navigate = useNavigate();
	const { loginError, setLoginError, isSigningUp, setIsSigningUp } =
		useGlobalContext();

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.min(2, "Name is too short")
				.max(25, "Must be 25 characters or less")
				.required("Required"),
			email: Yup.string().email("Invalid email address").required("Required"),
			password: Yup.string()
				.min(6, "Too short")
				.required("Password is required"),
		}),
		onSubmit: ({ email, password, name }, { resetForm }) => {
			setLoginError(false);
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					const user = userCredential.user;
					setIsSigningUp(true);
					updateProfile(auth.currentUser, {
						displayName: name,
					})
						.then(() => {
							// Profile updated!

							console.log("Name saved");
						})
						.catch((error) => {
							console.log(error);
							// An error occurred
						});
					sendEmailVerification(auth.currentUser).then(() => {
						// Email verification sent!
						console.log("Email verification sent");
					});
					// Signed in
					// ...
					setIsSigningUp(true);
				})
				.catch((error) => {
					// const errorCode = error.code;
					const errorMessage = error.message;
					setLoginError(true);
					console.log(errorMessage);
					// ..
				});
			resetForm();
		},
	});
	if (isSigningUp) {
		return <Redirecting />;
	}

	return (
		<>
			<div className="max-w-pref m-auto filter rounded-lg md:w-1/2 lg:w-lg mt-10 relative bg-gray-200">
				<div className="bg-primary absolute w-full h-3 rounded-lg -z-10 -top-1"></div>
				<header className="flex md:block gap-4 p-4">
					<button
						onClick={() => navigate(-1)}
						className="rounded-lg md:hidden grid hover:shadow-inner2 transition-all duration-500 w-8 h-8 bg-primary place-items-center"
					>
						<IoIosArrowBack className="text-white" />
					</button>
					<h2 className="font-bold text-2xl text-center">Sign up</h2>
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
						type="text"
						name="name"
						placeholder="Enter Full Name"
						className="form-input w-pref h-8 my-4 mx-auto flex justify-center focus:bg-inputBg"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name}
					/>
					{formik.touched.name && formik.errors.name ? (
						<div className="text-xxs text-red-700 pl-4 md:pl-6">
							{formik.errors.name}
						</div>
					) : null}
					<input
						type="email"
						name="email"
						placeholder="example@example.com"
						className="form-input w-pref h-8 my-4 mx-auto flex justify-center focus:bg-inputBg"
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
						placeholder="Pick a strong password"
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
						// disabled={disabled}
						type="submit"
					>
						Create account
					</button>
				</form>
				<h4 className="text-center -mt-6 pb-10">
					Already have an account?{" "}
					<Link to="/login" className="text-primary">
						Log in
					</Link>{" "}
				</h4>
			</div>
			<div className="absolute bottom-2 left-2">
				Copyright {new Date().getFullYear()} Taxed Inc
			</div>
		</>
	);
};

export default Signup;
