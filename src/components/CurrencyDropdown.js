import React from 'react'
import '../Dropdown.css';
import { AppContext } from "../context/AppContext";

const CurrencyDropdown = () => {
    const { currency, dispatch } = React.useContext(AppContext);

    const [selectedCurrency, setSelectedCurrency] = React.useState(currency);
    const [currencyName, setCurrencyName] = React.useState(getCurrencyName(currency));

    function getCurrencyName(currencySymbol) {
        switch (currencySymbol) {
            case '$':
                return "Dollar";
            case '£':
                return "Pound";
            case '€':
                return "Euro";
            case '₹':
                return "Rupee";
            default:
                return "";
        }
    }

    const handleSelect = (currency) => {
        setSelectedCurrency(currency);
        setCurrencyName(getCurrencyName(currency));
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    };

    return (
        <div className="dropdown hover-dropdown">
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton">
                Currency ({selectedCurrency} {currencyName})
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" onClick={() => handleSelect('$')}>$ Dollar</a>
                <a className="dropdown-item" onClick={() => handleSelect('£')}>£ Pound</a>
                <a className="dropdown-item" onClick={() => handleSelect('€')}>€ Euro</a>
                <a className="dropdown-item" onClick={() => handleSelect('₹')}>₹ Rupee</a>
            </div>
        </div>
    );
}

export default CurrencyDropdown
