import Image from "next/image";

const StepWithImage = ({image_path, header} : {image_path: string, header: string}) => {
    return (
        <>
            <h1 className="ml-8 mt-4 mb-2 text-2xl text-gray-800 font-bold">{header}</h1>
            <div className="flex justify-center">
            <Image
            src={image_path}
            width={300}
            height={300}
            alt=""/>
            </div>
        </>
    )
}

const GetStarted = () => {
    return (
        <div className="min-h-screen min-w-full flex flex-col p-16">
            <h1 className="text-6xl text-primary font-bold">Get Started</h1>
            <p className="mt-8 text-justify text-lg">To begin using the Haircut Recommendation API, you'll first need to create an account and obtain an API token. This token will authenticate your requests and grant access to the API's features. Signing up is quick and easy, and once you’ve signed in, you’ll be ready to start making API calls. Follow the steps below to create your account, sign in, and get your personal API token, which will allow you to unlock the full potential of our facial analysis and personalized haircut recommendations.</p>
            <div className="mt-4 pl-4">
                <h2 className="text-4xl text-primary font-bold">Signing Up</h2>
                <p className="mt-8 text-justify text-md">Sign up from the website before getting the token.</p>
                <ul className="mt-8">
                    <li>
                    <StepWithImage image_path="/signup/1.png" header="1. Press the sign up button on the top right corner"/>
                    <StepWithImage image_path="/signup/2.png" header="2. Fill the required form"/>
                    <StepWithImage image_path="/signup/3.png" header="3. Press Sign In"/>
                    <StepWithImage image_path="/signup/4.png" header="4. Fill with the account information"/>
                    </li>
                </ul>
            </div>
            <div className="mt-4 pl-4">
                <h2 className="text-4xl text-primary font-bold">Getting the token</h2>
                <p className="mt-8 text-justify text-md">Once you're signed in, you can get your account specific token.</p>
                <ul className="mt-8">
                    <li>
                    <StepWithImage image_path="/gettoken/1.png" header="1. Press the Get Token button on the top right corner"/>
                    <StepWithImage image_path="/gettoken/2.png" header="2. Copy the token"/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default GetStarted