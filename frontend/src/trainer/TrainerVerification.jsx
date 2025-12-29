import { useState } from "react";
import api from "../services/api";

export default function TrainerVerification() {
  const [certificate, setCertificate] = useState(null);
  const [idProof, setIdProof] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitVerification = async () => {
    try {
      if (!certificate || !idProof) {
        alert("Please upload both documents");
        return;
      }

      const formData = new FormData();
      formData.append("certificate", certificate);
      formData.append("idProof", idProof);

      setLoading(true);

      await api.post("/trainer/verification", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      alert("Verification documents uploaded successfully ✅");
      setCertificate(null);
      setIdProof(null);

    } catch (err) {
      console.error("UPLOAD ERROR:", err);
      alert(err.response?.data?.message || "Upload sucessfully");
    } finally {
      setLoading(false);
    }
  };

  return (
    /* 🔥 CENTER WRAPPER */
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding:"1%"

      }}
    >
      {/* VERIFICATION CARD */}
      <div className="trainer-card verification-card">
        <h3>📄 Trainer Verification</h3>
        <p className="sub-text">
          Upload your certification & ID proof for verification
        </p>

        {/* CERTIFICATE */}
        <div className="file-group">
          <label className="file-label">Professional Certificate</label>

          <label className="file-upload-btn">
            📂 Choose File
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              hidden
              onChange={(e) => setCertificate(e.target.files[0])}
            />
          </label>

          {certificate && (
            <span className="file-name">✅ {certificate.name}</span>
          )}
        </div>

        {/* ID PROOF */}
        <div className="file-group">
          <label className="file-label">Government ID Proof</label>

          <label className="file-upload-btn secondary">
            🪪 Choose File
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              hidden
              onChange={(e) => setIdProof(e.target.files[0])}
            />
          </label>

          {idProof && (
            <span className="file-name">✅ {idProof.name}</span>
          )}
        </div>

        <button
          className="btn btn-create submit-btn"
          onClick={submitVerification}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Submit Verification"}
        </button>
      </div>
    </div>
  );
}
