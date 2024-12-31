"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { sign_in, sign_out } from "../firebase/auth";
import { useRouter } from "next/navigation";

const SignInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState("");
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [failedSignIn, setFailedSignIn] = useState(false);
    const router = useRouter();

    // Email validation regex
    const validateEmail = (email: string) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const validatePassword = (password: string) => {
        const minLength = 8;
        if (password.length < minLength) {
            return `Password must be at least ${minLength} characters long`;
        }
        const hasUpperCase = /[A-Z]/.test(password);
        if (!hasUpperCase) {
            return "Password must contain at least one uppercase letter";
        }
        const hasLowerCase = /[a-z]/.test(password);
        if (!hasLowerCase) {
            return "Password must contain at least one lowercase letter";
        }
        const hasNumber = /\d/.test(password);
        if (!hasNumber) {
            return "Password must contain at least one number";
        }
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        if (!hasSpecialChar) {
            return "Password must contain at least one special character";
        }
        return "";
    };

    useEffect(() => {
        const valid = validateEmail(email);
        setEmailValid(valid);
    }, [email]);

    useEffect(() => {
        const valid = validatePassword(password);
        setPasswordValid(valid);
    }, [password]);

    useEffect(() => {
        setEmailValid(true);
        setPasswordValid("");
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!emailValid) {
            console.error("Email is not valid");
            return; // Stop form submission if email is invalid
        }

        if (passwordValid !== "") {
            console.error(passwordValid);
            return;
        }

        try {
            await sign_in(email, password);
            router.push("/");
        } catch {
            setFailedSignIn(true);
        }
    };

    return (
        <div className="py-32 flex items-center justify-center bg-gradient-to-b from-primary to-secondary">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl text-gray-800 font-bold text-center mb-6">Sign In</h1>
            <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
            {/* Email Field */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
                </label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`mt-1 block w-full px-4 py-2 border ${
                    !emailValid ? "border-error" : "border-gray-300"
                } rounded-lg shadow-sm`}
                placeholder="Enter your email"
                />
                {!emailValid && (
                <p className="text-error text-sm mt-1">Please enter a valid e-mail</p>
                )}
            </div>

            {/* Password Field */}
            <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
                </label>
                <input
                type={showPassword ? "text" : "password"} // Toggle type based on showPassword state
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`mt-1 block w-full px-4 py-2 border ${
                    passwordValid !== "" ? "border-error" : "border-gray-300"
                } rounded-lg shadow-sm`}
                placeholder="Enter your password"
                />
                {passwordValid !== "" && (
                <p className="text-red-500 text-sm mt-1">{passwordValid}</p>
                )}
                {/* Eye Icon Button to Toggle Password Visibility */}
                <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                >
                {showPassword ? (
                    <p className="mt-6 text-sm text-gray-400">hide</p>
                ) : (
                    <p className="mt-6 text-sm text-gray-400">show</p>
                )}
                </button>
            </div>

            {failedSignIn && <p className="text-error text-sm mt-1">Wrong credentials!</p>}

            {/* Submit Button */}
            <div>
                <button
                type="submit"
                className="w-full btn btn-accent text-white py-2 px-4 rounded-lg shadow"
                disabled={!emailValid || (passwordValid !== "")}
                >
                Sign In
                </button>
                <h1 className="inline-block pr-1 mt-2">Don't have an account ? </h1>
                <Link href="/sign-up">
                    <h1 className="inline-block pr-1 text-accent font-semibold">Sign Up</h1>
                </Link>
            </div>
            </form>
        </div>
        </div>
    );
};

export default SignInPage;
