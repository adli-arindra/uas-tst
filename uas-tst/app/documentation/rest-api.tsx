

const RestAPI = () => {
    return (
        <div className="min-h-screen min-w-full flex flex-col p-16">
            <h1 className="text-6xl text-primary font-bold">Rest API</h1>
            <p className="mt-8 text-justify text-lg">The Haircut Recommendation API provides an intelligent solution for generating <strong>personalized haircut suggestions</strong> based on a user's facial features. By analyzing uploaded face images, the API uses machine learning models to evaluate key facial attributes such as shape, proportions, and contours. Based on these insights, it suggests the most flattering and suitable haircut styles tailored to the individual.</p>
            <div className="mt-4 pl-4">
                <h2 className="text-4xl text-primary font-bold">Validate Token</h2>
            </div>
            <div className="mt-4 pl-4">
                <h2 className="text-4xl text-primary font-bold">Get Haircut</h2>
            </div>
        </div>
    );
}

export default RestAPI