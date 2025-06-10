import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <div>
        <nav className="bg-white shadow-md">
          <ul className="flex space-x-6 px-6 py-4">
            <li>
              <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/profile" className="text-blue-600 hover:underline">Profile</Link>
            </li>
            <li>
              <Link href="/thread" className="text-blue-600 hover:underline">Thread</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}
