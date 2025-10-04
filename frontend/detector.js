export default function FakeWebsiteDetector({ onComplete }) {
  const realSite = "https://secure-bank.com/login";
  const fakeSite = "http://secure-bank-login.fake-site.com";

  const checkChoice = (choice) => {
    if (choice === "real") {
      alert("✅ Correct! This is the real login page.");
      onComplete();
    } else {
      alert("❌ This was a phishing site!");
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-3">Fake Website Detector</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="border p-4 rounded">
          <h3>Website A</h3>
          <p>{realSite}</p>
          <button
            onClick={() => checkChoice("real")}
            className="mt-2 px-3 py-1 bg-green-500 text-white rounded"
          >
            Select
          </button>
        </div>
        <div className="border p-4 rounded">
          <h3>Website B</h3>
          <p>{fakeSite}</p>
          <button
            onClick={() => checkChoice("fake")}
            className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
}
