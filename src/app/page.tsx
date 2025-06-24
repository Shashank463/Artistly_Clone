'use client';
// import { useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-4 bg-gray-800 text-white">
        <nav className="max-w-6xl mx-auto flex justify-between">
          <h1 className="text-xl font-bold">Artistly</h1>
          <div className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/artists">Artists</Link>
            <Link href="/onboard">Onboard Artist</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>
        </nav>
      </header>

      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-semibold mb-4">Book Top Artists for Your Events</h2>
        <p className="text-gray-600 mb-6">Connecting Event Planners with Professional Artists</p>
        <Link href="/artists">
          <button className="bg-blue-600 text-white px-6 py-2 rounded">Explore Artists</button>
        </Link>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-4 bg-yellow-100 text-black rounded">Singers</div>
        <div className="p-4 bg-yellow-100 text-black rounded">Dancers</div>
        <div className="p-4 bg-yellow-100 text-black rounded">Speakers</div>
        <div className="p-4 bg-yellow-100 text-black rounded">DJs</div>
      </section>
    </div>
  );
}
