import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './header.css';

function Header() {
    const [searchCategory, setSearchCategory] = useState('');
    const navigate = useNavigate();

    const handleCategoryChange = (event) => {
        setSearchCategory(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchCategory) {
            navigate(`/shop?category=${searchCategory}`);
        } else {
            alert('Please select a category');
        }
    };

    return (
        <header>
            <div className="header-content">
                <nav className="header-nav">
                    <ol className="header-nav-content">
                        <li className="header-nav-item"><Link to="/">Home</Link></li>
                        <li className="header-nav-item"><Link to="/shop">Shop</Link></li>
                        <li className="header-nav-item"><Link to="/products">Products</Link></li>
                        <li className="header-nav-item"><Link to="/contact">Contact Us</Link></li>
                        <li className="header-nav-item">
                            <form onSubmit={handleSubmit} className="search-form">
                                <select value={searchCategory} onChange={handleCategoryChange}>
                                    <option value="">Search Category</option>
                                    <option value="dining chairs">Dining Chairs</option>
                                    <option value="sofas">Sofas</option>
                                    <option value="tables">Tables</option>
                                    <option value="tv stand">TV Stand</option>
                                </select>
                                <button type="submit"><FaSearch /></button>
                            </form>
                        </li>
                        <li className="header-nav-item"><Link to="/order">Order</Link></li>
                    </ol>
                </nav>
            </div>
        </header>
    );
}

export default Header;
