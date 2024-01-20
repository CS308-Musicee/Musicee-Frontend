import React, { useState, ChangeEvent, FormEvent } from 'react';



const FileUploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [Message, setMessage]= useState<string | null>(null);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://musicee.us-west-2.elasticbeanstalk.com/tracks/upload_track_file/', {
          method: 'POST',
          body: formData,
        });

        console.log('Server response:', response);

        if (response.ok) {
          const result = await response.json();
          console.log('Server response:', result);
          console.log('File uploaded successfully');
          setMessage('File uploaded successfully');
        } else {
          console.error('File upload failed:', response.status);
          setMessage('File upload failed');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        setMessage('Error uploading file');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='text-4xl mb-8'>Upload JSON File</div>
      <div className='flex flex-col space-y-8 items-center'>
      <input type="file" onChange={handleFileChange} />
      <button type="submit" className='bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-28'>Upload</button>
      {Message && <div className="text-green-500">{Message}</div>}
      </div>
    </form>
  );
};

export default FileUploadForm;











// WOULD BE USEFUL FOR ONE TRACK ENTER
// "use client"

// import React, { useState, ChangeEvent, FormEvent } from 'react';

// const FileUploadForm: React.FC = () => {
//   const [file, setFile] = useState<File | null>(null);

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       const selectedFile = e.target.files[0];
//       setFile(selectedFile);
//     }
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (file) {
//       if (file.type === 'application/json') {
//         const reader = new FileReader();

//         reader.onload = async (event) => {
//           if (event.target) {
//             const fileContent = event.target.result;
//             console.log("File content:", fileContent);

//             try {
//               const jsonData = JSON.parse(fileContent as string);
//               console.log("Parsed JSON data:", jsonData);

//               const response = await fetch('http://musicee.us-west-2.elasticbeanstalk.com/tracks/upload_track_file/', {
//                 method: 'POST',
//                 headers: {
//                   'Content-Type': 'application/json'
//                 },
//                 body: file, // Sending parsed JSON data as body
//               });

//               console.log('Server response:', response);

//               if (response.ok) {
//                 const result = await response.json();
//                 console.log('Server response:', result);
//                 console.log('File uploaded successfully');
//               } else {
//                 console.error('File upload failed:', response.status);
//               }
//             } catch (error) {
//               console.error('Error parsing JSON or uploading file:', error);
//             }
//           }
//         };

//         reader.readAsText(file);
//       } else {
//         console.error("Selected file is not a JSON file.");
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="file" onChange={handleFileChange} />
//       <button type="submit">Upload</button>
//     </form>
//   );
// };

// export default FileUploadForm;



