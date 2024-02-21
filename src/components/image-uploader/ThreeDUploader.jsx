import React, { useEffect, useState } from "react";
import { t } from "i18next";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud, FiXCircle } from "react-icons/fi";

const ThreeDUploader = ({ setModelUrl, modelUrl }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    accept: ".3ds",
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  useEffect(() => {
    if (!file) return;

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", file);

    axios({
      url: "/upload-3d-model", // Replace with your backend endpoint for 3D model upload
      method: "POST",
      data: formData,
    })
      .then((res) => {
        setLoading(false);
        setModelUrl(res.data.url); // Assuming your backend returns the URL of the uploaded model
      })
      .catch((err) => {
        setError("Error uploading file");
        setLoading(false);
        console.error(err);
      });
  }, [file, setModelUrl]);

  return (
    <div className="w-full text-center">
      <div
        className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <span className="mx-auto flex justify-center">
          <FiUploadCloud className="text-3xl text-emerald-500" />
        </span>
        <p className="text-sm mt-2">{t("DragYour3DModel")}</p>
        <em className="text-xs text-gray-400">{t("modelFormat")}</em>
      </div>

      <div className="text-emerald-500">{loading && "Uploading..."}</div>
      <div className="text-red-500">{error}</div>
      {modelUrl && (
        <div className="mt-4">
          <div>
            <span>Uploaded 3D Model:</span>
            <span>{modelUrl}</span>
          </div>
          <button
            type="button"
            className="text-red-500 focus:outline-none"
            onClick={() => setModelUrl(null)}
          >
            <FiXCircle className="inline-block" />
            <span className="ml-1">Remove</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ThreeDUploader;
