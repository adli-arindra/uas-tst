// pages/api-docs.tsx

const Documentation = () => {
    return (
      <div className="max-w-7xl mx-auto p-8 bg-white text-gray-900">
        <h1 className="text-4xl font-semibold mb-6">API Documentation</h1>
  
        <p className="text-lg mb-6">
          Welcome to the API documentation for the Haircut Processing API. Below, you'll find all the details on how to interact with the endpoint for processing images to detect face shapes and predict haircut data.
        </p>
  
        <div className="space-y-12">
          {/* POST /haircut Endpoint */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">POST /haircut</h2>
            <p className="text-lg mb-4">
              This endpoint processes an image and predicts the corresponding haircut data based on the face shape detected in the image. The image should be uploaded as a part of the request.
            </p>
            <h3 className="font-medium text-lg mb-2">Request</h3>
            <p className="mb-4">
              Send a POST request with an image file in the body of the request. The image must be included in the form data with the field name `image`.
            </p>
            <h4 className="font-medium text-lg mb-2">Request Body</h4>
            <pre className="bg-gray-100 p-4 rounded-md">
              {`POST /haircut
  Content-Type: multipart/form-data
  
  {
    "image": <image-file>
  }`}
            </pre>
            <h3 className="font-medium text-lg mb-2">Response</h3>
            <p className="mb-4">
              The server will respond with a JSON object containing the processed image (base64-encoded) and the predicted haircut data.
            </p>
            <h4 className="font-medium text-lg mb-2">Response Body</h4>
            <pre className="bg-gray-100 p-4 rounded-md">
              {`{
    "image": "<base64-encoded-image>",
    "haircut_data": [
      // Array of haircut data
      {
        "style": "short",
        "recommended": true
      },
      ...
    ]
  }`}
            </pre>
          </section>
  
          {/* Error Responses */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Error Responses</h2>
            <p className="text-lg mb-4">
              The server may return the following error responses if the request is malformed or invalid.
            </p>
            <h3 className="font-medium text-lg mb-2">400 Bad Request</h3>
            <p className="mb-4">
              If no image file is provided, or if the image file has an empty filename, the server will return a `400 Bad Request` response with an error message.
            </p>
            <pre className="bg-gray-100 p-4 rounded-md">
              {`{
    "error": "No image file provided"
  }`}
            </pre>
          </section>
        </div>
      </div>
    );
  };
  
  export default Documentation;
  