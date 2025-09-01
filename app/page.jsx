export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-200 font-sans">

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center mt-32 px-4">
        <h2 className="text-5xl font-extrabold text-indigo-700 mb-4 animate-pulse">
          Welcome 👋
        </h2>
        <p className="text-lg text-gray-700 max-w-xl">
          Use the navigation above to <span className="font-semibold text-indigo-500">add a new school</span> or <span className="font-semibold text-purple-500">view all schools</span>.
        </p>
      </div>
    </div>
  );
}