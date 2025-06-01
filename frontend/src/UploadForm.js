import React, { useState, useRef, useEffect } from 'react';

function UploadForm() {
  const [dragging, setDragging] = useState(false);
  const [fileName, setFileName] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  // Get CSRF token when component mounts
  useEffect(() => {
    const getCsrfToken = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/csrf/`, {
          credentials: 'include',
        });
        const data = await response.json();
        setCsrfToken(data.csrfToken);
        console.log('✅ CSRF token obtained');
      } catch (error) {
        console.error('❌ Failed to get CSRF token:', error);
      }
    };

    getCsrfToken();
  }, []);

  // Prevent browser from hijacking drag/drop outside the dropzone
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

  // Upload file to backend with CSRF protection
  const uploadToBackend = async (file) => {
    if (!csrfToken) {
      console.error('❌ No CSRF token available');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/uploads/`, {
        method: 'POST',
        headers: {
          'X-CSRFToken': csrfToken, // Include CSRF token in headers
        },
        credentials: 'include', // Include cookies for CSRF
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        console.log('✅ Upload success:', data);
      } else {
        console.error('❌ Upload failed:', data);
      }
    } catch (error) {
      console.error('❌ Upload error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      console.log('Selected file:', file);
      uploadToBackend(file); // Upload after selecting
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);

    const file = event.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      console.log('Dropped file:', file);
      uploadToBackend(file); // Upload after dropping
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
    if (fileInputRef.current && !loading) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      className={`upload-dropzone ${dragging ? 'dragging' : ''} ${loading ? 'uploading' : ''}`}
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <p>
        {loading 
          ? 'Uploading...' 
          : 'Drag and drop a PDF here, or click to select one.'
        }
      </p>

      {/* Show uploaded file name */}
      {fileName && <p className="file-name">Selected: {fileName}</p>}

      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="upload-input"
        ref={fileInputRef}
        onClick={(e) => e.stopPropagation()}
        disabled={loading}
      />
    </div>
  );
}

export default UploadForm;