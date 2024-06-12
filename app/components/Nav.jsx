'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';

import { usePathname } from 'next/navigation';

export function Nav() {
  const pathname = usePathname();

  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Loog
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          as={Link}
          href="/"
          className="text-base"
          active={pathname == '/'}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/projects"
          className="text-base"
          active={pathname == '/projects'}
        >
          Projects
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/resources"
          className="text-base"
          active={pathname == '/resources'}
        >
          Resources
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/about"
          className="text-base"
          active={pathname == '/about'}
        >
          About
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
