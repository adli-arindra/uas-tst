import { validateToken } from '@/app/firebase/token';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  
  if (req.method === 'POST') {
    try {
      const { image, token } = req.body;

      const valid = await validateToken(token);
      if (!valid) return res.status(500).json({ message: "Token is invalid!" });
      
      // Check if image is provided and if it's a string (base64 encoded)
      if (typeof image !== 'string') {
        return res.status(400).json({ message: 'Invalid image format' });
      }
      // Send the base64-encoded image to the external API
      const data = await fetch(process.env.NEXT_PUBLIC_ENDPOINT + "haircut", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "image": image }) // Pass the image as JSON body
      });

      // Check if the response is OK
      if (!data.ok) {
        const errorText = await data.text(); // Get the raw HTML or error message
        return res.status(data.status).json({ message: `Error from external API: ${errorText}` });
      }

      // Parse the JSON response
      const body = await data.json();

      // Return the response from the external API to the client
      return res.status(200).json(body);

    } catch (error) {
      // If error is an instance of Error, use its message property
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong';
      console.error("Error:", errorMessage); // Log error for debugging
      return res.status(500).json({ message: errorMessage });
    }    
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
