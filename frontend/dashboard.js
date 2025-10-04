export default function Dashboard({ completedTasks }) {
  const modules = [
    "Phishing Simulator",
    "Fake Website Detector",
    "Password Tester",
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Welcome to Cyber Trainer 🚀</h2>
      <p className="mb-4">
        Learn to detect and handle cyber threats through hands-on challenges.
      </p>

      <h3 className="text-xl font-semibold mb-2">Your Progress</h3>
      <ul className="list-disc ml-5">
        {modules.map((mod) => (
          <li key={mod} className={completedTasks.includes(mod.toLowerCase().split(" ")[0]) ? "text-green-600" : ""}>
            {mod} {completedTasks.includes(mod.toLowerCase().split(" ")[0]) && "✅"}
          </li>
        ))}
      </ul>
    </div>
  );
}
