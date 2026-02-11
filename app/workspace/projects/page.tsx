export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="font-semibold mb-2">Dwell USA</h2>
          <p className="text-sm text-gray-500">Rent workflow platform.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="font-semibold mb-2">Builder Studio</h2>
          <p className="text-sm text-gray-500">Construction operations.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="font-semibold mb-2">FreedomLabs</h2>
          <p className="text-sm text-gray-500">Engineering infrastructure.</p>
        </div>
      </div>
    </div>
  );
}
