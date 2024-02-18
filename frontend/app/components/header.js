import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex items-center mb-4">
      <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
      <h1 className="text-2xl font-bold">Fishy Fellas</h1>
      <Link className="ml-4" href="/about">
        About
      </Link>
    </div>
  );
};

export default Header;