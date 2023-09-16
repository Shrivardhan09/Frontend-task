import React, { useState } from 'react';
import './home.css';

const HomeBar = () => {
    const navbar = [
        { name: 'HOME', id: 'home' },
        { name: 'ABOUT', id: 'about' },
        {
            name: 'OUR PRODUCTS',
            id: 'product',
            child: [
                { name: 'Product 1', id: 'p1' },
                { name: 'Product 2', id: 'p2' },
                { name: 'Product 3', id: 'p3' },
                { name: 'Product 4', id: 'p4' },
            ],
        },
        { name: 'CONTACT US', id: 'contact' },
    ];

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="home-bar">
            {navbar.map((items) => (
                <div
                    key={items.id}
                    className={`homeBar-items ${items.id === 'product' ? 'dropdown' : ''}`}
                    id={items.id}
                    onClick={items.id === 'product' ? toggleDropdown : null}
                >
                    <p className='capitalise'>{items.name}</p>
                    {items.id === 'product' && isDropdownOpen && (
                        <div className="dropdown-content">
                            {items.child.map((childItem) => (
                                <div key={childItem.id} className="dropdown-item">
                                    <p>{childItem.name}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default HomeBar;
