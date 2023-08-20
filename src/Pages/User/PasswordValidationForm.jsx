import React, { useState, forwardRef } from 'react';

function PasswordValidationForm({ errors, passwordField }) {
    const [passwordChecklist, setPasswordChecklist] = useState({
        uppercase: false,
        lowercase: false,
        number: false,
        symbol: false,
        length: false,
    });

    const handlePasswordChange = (event) => {
        const password = event.target.value;
        const updatedChecklist = {
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /[0-9]/.test(password),
            symbol: /[@$!%*?&]/.test(password),
            length: password.length >= 8,
        };
        setPasswordChecklist(updatedChecklist);
        // console.log(updatedChecklist)
    };

    return (
        <div>
            <div className="mb-4">
                <input
                    type="password"
                    onChange={(e) => {
                        passwordField.onChange(e); // Update the value in the field
                        handlePasswordChange(e); // Handle password validation
                    }}
                    className={`w-full p-2 border ${errors ? "border-red-500" : ""} rounded focus:outline-none focus:ring`}
                    value={passwordField.value}
                />
            </div>
            <div className="flex flex-col space-y-1 mb-4 text-sm text-gray-700 font-extralight">
                <ChecklistItem
                    label="At least one uppercase letter"
                    checked={passwordChecklist.uppercase}
                />
                <ChecklistItem
                    label="At least one lowercase letter"
                    checked={passwordChecklist.lowercase}
                />
                <ChecklistItem
                    label="At least one number"
                    checked={passwordChecklist.number}
                />
                <ChecklistItem
                    label="At least one special symbol (@$!%*?&)"
                    checked={passwordChecklist.symbol}
                />
                <ChecklistItem
                    label="Minimum 8 characters"
                    checked={passwordChecklist.length}
                />
            </div>
        </div>
    );
}

function ChecklistItem({ label, checked }) {
    // console.log(checked)
    return (
        <div className="flex items-center">
            <span
                className={`mr-2 font-semibold ${checked ? "text-green-600" : "text-gray-700"
                    }`}
            >
                {checked ? "✓" : "✗"}
            </span>
            <p>{label}</p>
        </div>
    );
}

export default PasswordValidationForm;
