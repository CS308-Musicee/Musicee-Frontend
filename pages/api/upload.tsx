export default async function handler(req:any, res:any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const data = req.body; // This expects the file data to be sent via FormData
    console.log('Received file data:', data);

    // Forwarding the received data to the external endpoint
    const endpoint = 'http://musicee.us-west-2.elasticbeanstalk.com/tracks/add_track';
    const response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Response from external endpoint:', result);
      return res.status(200).json({ message: 'File uploaded successfully' });
    } else {
      console.error('Failed to upload file to external endpoint:', response.status);
      return res.status(500).json({ error: 'Failed to upload file yeyeye' });
    }
  } catch (error) {
    console.error('An error occurred while uploading the file:', error);
    return res.status(500).json({ error: 'An error occurred while uploading the file' });
  }
}
