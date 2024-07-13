import React, { useState } from 'react';
import cls from './Dropdown.module.scss';
import arrow_right from '../../assests/right_arrow_icon.svg';

interface DropdownProps {
    title: string;
    items: Array<{ label: string; value: string }>;
    onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ title, items, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.checked ? event.target.value : '';
        onChange(value);
    };

    return (
        <div className={cls.dropdown}>
            <div className={cls.dropdownHeader} onClick={toggleDropdown}>
                <img src={arrow_right} alt='arrow' className={`${cls.dropdownHeader_arrow} ${isOpen ? cls.dropdownHeader_arrow_open : ''}`}/>
                {title}
            </div>
            {isOpen && (
                <div className={cls.dropdownList}>
                    {items.map((item) => (
                        <label key={item.value}>
                            <input type="checkbox" name={item.value} value={item.value} onChange={handleCheckboxChange}/>
                            {item.label}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
