import Head from "next/head";


const RestAPI = () => {
    return (
        <div className="min-h-screen bg-gray-50">
        <main className="max-w-4xl mx-auto py-10">
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">GET /api/token</h2>
          <p className="text-gray-700">
            Fetches a token for the given email. If the token doesn't exist, it creates one.
          </p>
          <div className="mt-4 bg-gray-100 p-4 rounded border">
            <h3 className="text-gray-800 font-semibold">Request</h3>
            <p className="mt-2">
              <span className="font-medium">Method:</span> GET
            </p>
            <p>
              <span className="font-medium">Query Parameters:</span>
            </p>
            <ul className="list-disc pl-6">
              <li>
                <code className="bg-gray-200 px-1 rounded">email</code> (required): Email address to fetch or create the token.
              </li>
            </ul>
          </div>
          <div className="mt-4 bg-gray-100 p-4 rounded border">
            <h3 className="text-gray-800 font-semibold">Response</h3>
            <pre className="bg-gray-800 text-white p-4 rounded">
{`{
  "token": "generated-or-existing-token"
}`}
            </pre>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">POST /api/predict</h2>
          <p className="text-gray-700">
            Processes a picture of a face and predicts the head shape.
          </p>
          <div className="mt-4 bg-gray-100 p-4 rounded border">
            <h3 className="text-gray-800 font-semibold">Request</h3>
            <p className="mt-2">
              <span className="font-medium">Method:</span> POST
            </p>
            <p>
              <span className="font-medium">Body:</span>
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
{`{
  "image": "base64-encoded-image-data"
}`}
            </pre>
          </div>
          <div className="mt-4 bg-gray-100 p-4 rounded border">
            <h3 className="text-gray-800 font-semibold">Response</h3>
            <pre className="bg-gray-800 text-white p-4 rounded">
{`{
  "image_url": "the link to base64-encoded-processed-image",
  "head_shape": "predicted-head-shape"
}`}
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RestAPI