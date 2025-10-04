export default function Navbar({ setActivePage }) {
  const menu = [
    { name: "Dashboard", key: "dashboard" },
    { name: "Phishing Simulator", key: "phishing" },
    { name: "Fake Website Detector", key: "fakeweb" },
    { name: "Password Tester", key: "password" },
    { name: "Cyber Score", key: "score" }
  ];

  return (
    <nav className="bg-blue-600 text-white p-4 flex space-x-4">
      {menu.map((item) => (
        <button
          key={item.key}
          onClick={() => setActivePage(item.key)}
          className="hover:bg-blue-800 px-3 py-1 rounded"
        >
          {item.name}
        </button>
      ))}
    </nav>
  );
}
