'use client';

import { useState } from 'react';

const artistsData = [
  {
    id: 1,
    name: 'DJ Arjun',
    category: 'DJ',
    price: 15000,
    location: 'Mumbai',
  },
  {
    id: 2,
    name: 'Sonal Verma',
    category: 'Singer',
    price: 20000,
    location: 'Delhi',
  },
  {
    id: 3,
    name: 'Rahul Nair',
    category: 'Dancer',
    price: 12000,
    location: 'Bangalore',
  },
  {
    id: 4,
    name: 'MC Priya',
    category: 'Speaker',
    price: 10000,
    location: 'Hyderabad',
  },
];

export default function ArtistsPage() {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filteredArtists = artistsData.filter((artist) => {
    return (
      (category ? artist.category === category : true) &&
      (location ? artist.location.toLowerCase().includes(location.toLowerCase()) : true) &&
      (maxPrice ? artist.price <= parseInt(maxPrice) : true)
    );
  });

  return (
    <div className="min-h-screen bg-black p-6">
      <h1 className="text-3xl font-semibold mb-6">Artists</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded w-full md:w-auto"
        >
          <option value="">All Categories</option>
          <option value="Singer">Singer</option>
          <option value="DJ">DJ</option>
          <option value="Dancer">Dancer</option>
          <option value="Speaker">Speaker</option>
        </select>

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded w-full md:w-auto"
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 rounded w-full md:w-auto"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist) => (
            <div key={artist.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-2">{artist.name}</h2>
              <p className="text-gray-600 mb-1">Category: {artist.category}</p>
              <p className="text-gray-600 mb-1">Location: {artist.location}</p>
              <p className="text-gray-600 mb-2">Fee: ₹{artist.price}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Ask for Quote
              </button>
            </div>
          ))
        ) : (
          <p>No artists found.</p>
        )}
      </div>
    </div>
  );
}
