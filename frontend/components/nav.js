import React from "react";
import Link from "next/link";

const Nav = ({ categories }) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/" className="navbar-item">
          <a>Strapi Blog</a>
        </Link>
      </div>
      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          {categories.map((category) => {
            return (
              <Link
                as={`/category/${category.slug}`}
                href="/category/[id]"
                key={category.id}
              >
                <a className="navbar-item">{category.name}</a>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
