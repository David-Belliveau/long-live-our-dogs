import React, { useState, useRef, useEffect } from 'react';

function UploadForm() {
  const [dragging, setDragging] = useState(false);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);

  // ✅ Prevent browser from hijacking drag/drop outside the dropzone
  useEffect(() => {
    const handleWindowDragOver = (e) => e.preventDefault();
    const handleWindowDrop = (e) => e.preventDefault();

    window.addEventListener('dragover', handleWindowDragOver);
    window.addEventListener('drop', handleWindowDrop);

    return () => {
      window.removeEventListener('dragover', handleWindowDragOver);
      window.removeEventListener('drop', handleWindowDrop);
    };
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      console.log('Selected file:', file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);

    const file = event.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      console.log('Dropped file:', file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      className={`upload-dropzone ${dragging ? 'dragging' : ''}`}
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <p>Drag and drop a PDF here, or click to select one.</p>

      {/* ✅ Show uploaded file name */}
      {fileName && <p className="file-name">Selected: {fileName}</p>}

      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="upload-input"
        ref={fileInputRef}
      />
    </div>
  );
}

export default UploadForm;
