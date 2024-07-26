
import Spline from "@splinetool/react-spline";
import {SignInForm} from "./Component/SignInForm.tsx";
import {Route, Routes} from "react-router-dom";
import { SignUpForm } from "./Component/SignUpForm.tsx";
import {useEffect, useRef, useState} from "react";
import LoadingBar, {LoadingBarRef} from "react-top-loading-bar";




function Login() {
    const loadingBarRef = useRef<LoadingBarRef>(null);
    const [loading, setLoading] = useState(true);
    const startLoading = () => {
        if (loadingBarRef.current) {
            loadingBarRef.current.continuousStart();
        }
    };

    const completeLoading = () => {
        if (loadingBarRef.current) {
            loadingBarRef.current.complete();
        }
    };

    // Simulate loading
    useEffect(() => {
        setLoading(true);
        startLoading();
        setTimeout(() => {
            completeLoading();
            setLoading(false);
        }, 3200); // Change this timeout as needed
    }, []);




    return (
        <div className="overflow-hidden h-[calc(100vh)]">
            {loading && <div className={`absolute left-0 right-0 top-0 bottom-0 z-[999] bg-white`} id="lottieunivers">
                    <LoadingBar className={`w-screen`} color="#0097D7" ref={loadingBarRef}/>
                </div>}
                <div className={`w-full   bg-white  flex justify-center flex-1`}>
                <div className={`flex-1      text-center hidden lg:flex`}>
                    <Spline scene="https://prod.spline.design/Jd6GmXVM6-pefb01/scene.splinecode"/>

                </div>

                <Routes>
                    <Route path="/login" element={<SignInForm/>}/>
                    <Route path="/register" element={<SignUpForm/>}/>
                </Routes>


            </div>
        </div>
);
}
export default Login;