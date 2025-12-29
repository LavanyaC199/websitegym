const submitVerification = async () => {
  try {
    if (!certificate || !idProof) {
      alert("Please select both files");
      return;
    }

    const formData = new FormData();
    formData.append("certificate", certificate);
    formData.append("idProof", idProof);

    await api.post("/trainer/verification", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    alert("Documents uploaded successfully ✅");

  } catch (err) {
    console.error("UPLOAD ERROR:", err);

    if (err.response?.data?.message) {
      alert(err.response.data.message);
    } else {
      alert("Upload failed – check backend logs");
    }
  }
};
