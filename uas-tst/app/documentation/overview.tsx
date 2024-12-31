

const Overview = () => {
    return (
        <div className="min-h-screen min-w-full flex flex-col p-16">
            <h1 className="text-6xl text-primary font-bold">Overview</h1>
            <p className="mt-8 text-justify text-lg">The Haircut Recommendation API provides an intelligent solution for generating <strong>personalized haircut suggestions</strong> based on a user's facial features. By analyzing uploaded face images, the API uses machine learning models to evaluate key facial attributes such as shape, proportions, and contours. Based on these insights, it suggests the most flattering and suitable haircut styles tailored to the individual.</p>
            <div className="mt-4 pl-4">
                <h2 className="text-4xl text-primary font-bold">Key Features</h2>
                <div className="ml-12 text-xl flex flex-col gap-4 py-4">
                    <li>
                        <h3 className="text-2xl text-gray-800 font-bold">Face Analysis</h3>
                        <p>The API processes facial images to extract relevant features and characteristics.</p>
                    </li>
                    <li>
                        <h3 className="text-2xl text-gray-800 font-bold">Personalized Suggestions</h3>
                        <p>It offers haircut recommendations that complement face shape and features.</p>
                    </li>
                    <li>
                        <h3 className="text-2xl text-gray-800 font-bold">Fast and Reliable</h3>
                        <p>Quick processing of images with minimal latency, providing real-time recommendations.</p>
                    </li>
                </div>
            </div>
            <p className="mt-4 text-justify text-lg">This API leverages advanced computer vision and machine learning techniques to provide reliable and stylish haircut recommendations, making it easy for users to discover their ideal look.</p>

        </div>
    );
}

export default Overview