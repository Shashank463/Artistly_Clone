'use client';

const artists = [
  {
    id: 1,
    name: 'DJ Arjun',
    city: 'Mumbai',
    fee: 15000,
    category: 'DJ',
  },
  {
    id: 2,
    name: 'Sonal Verma',
    city: 'Delhi',
    fee: 20000,
    category: 'Singer',
  },
  {
    id: 3,
    name: 'Rahul Nair',
    city: 'Bangalore',
    fee: 12000,
    category: 'Dancer',
  },
];

export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Artist Manager Dashboard</h1>

      {artists.length > 0 ? (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">City</th>
              <th className="border px-4 py-2 text-left">Fee (INR)</th>
              <th className="border px-4 py-2 text-left">Category</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {artists.map((artist) => (
              <tr key={artist.id} className="border-t">
                <td className="border px-4 py-2">{artist.name}</td>
                <td className="border px-4 py-2">{artist.city}</td>
                <td className="border px-4 py-2">₹{artist.fee}</td>
                <td className="border px-4 py-2">{artist.category}</td>
                <td className="border px-4 py-2 space-x-2">
                  <button className="px-2 py-1 bg-green-600 text-white rounded text-sm">Edit</button>
                  <button className="px-2 py-1 bg-red-600 text-white rounded text-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No artists onboarded yet.</p>
      )}
    </div>
  );
}
