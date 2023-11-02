
import React, { useState } from 'react';

const UploadArtwork = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Implement the logic to upload the selected file to your server or storage service.
    // You can use libraries like axios to send the file to your backend.
  };

  return (
    <div>
      <h2>Upload Your Artwork</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadArtwork;
