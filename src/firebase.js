import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
	apiKey: "AIzaSyDPrRnFSFm0cvchG1ipOSDs-1sCskJdSMc",
	authDomain: "tax-system-d6e4c.firebaseapp.com",
	projectId: "tax-system-d6e4c",
	storageBucket: "tax-system-d6e4c.appspot.com",
	messagingSenderId: "849163855996",
	appId: "1:849163855996:web:4beaf0457b9367159481f9",
	measurementId: "G-83X6SC7N1M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
