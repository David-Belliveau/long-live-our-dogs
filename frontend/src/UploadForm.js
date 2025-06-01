import React, { useState, useRef, useEffect } from 'react';

function UploadForm() {
  const [dragging, setDragging] = useState(false);
  const [fileName, setFileName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null); // Store the file
  const [csrfToken, setCsrfToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(''); // Success/error message
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

  // Upload file to backend
  const uploadToBackend = async (file) => {
    if (!csrfToken) {
      console.error('❌ No CSRF token available');
      setUploadStatus('Error: No CSRF token available');
      return;
    }

    setLoading(true);
    setUploadStatus('');
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/uploads/`, {
        method: 'POST',
        headers: {
          'X-CSRFToken': csrfToken,
        },
        credentials: 'include',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        console.log('✅ Upload success:', data);
        setUploadStatus('✅ File uploaded successfully!');
        // Reset form after successful upload
        setSelectedFile(null);
        setFileName('');
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        console.error('❌ Upload failed:', data);
        setUploadStatus('❌ Upload failed. Please try again.');
      }
    } catch (error) {
      console.error('❌ Upload error:', error);
      setUploadStatus('❌ Upload error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setSelectedFile(file); // Store file instead of uploading immediately
      setUploadStatus(''); // Clear any previous status
      console.log('Selected file:', file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);

    const file = event.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      setSelectedFile(file); // Store file instead of uploading immediately
      setUploadStatus(''); // Clear any previous status
      console.log('Dropped file:', file);
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      uploadToBackend(selectedFile);
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
    <div className="upload-form-container">
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

        {/* File name display removed - browser shows it natively */}

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

      {/* Submit Button with spacing */}
      {selectedFile && !loading && (
        <div style={{ marginTop: '16px' }}>
          <button 
            onClick={handleSubmit}
            className="submit-button"
            disabled={loading}
          >
            Upload File
          </button>
        </div>
      )}

      {/* Upload Status Message */}
      {uploadStatus && (
        <p className={`upload-status ${uploadStatus.includes('✅') ? 'success' : 'error'}`}>
          {uploadStatus}
        </p>
      )}
    </div>
  );
}

export default UploadForm;