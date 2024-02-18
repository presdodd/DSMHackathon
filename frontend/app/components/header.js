import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex items-center mb-4">
      <img src="/logo.jpg" alt="Logo" className="h-12 w-16 mr-3" />
      <h1 className="text-2xl font-bold"><Link href="/"k>FishySolutions</Link></h1>
      <Link className="ml-4" href="/about">
        About
      </Link>
    </div>
  );
};

export default Header;