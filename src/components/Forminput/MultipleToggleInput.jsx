import React from "react";

const MultipleToggleInput = ({
  name,
  label,
  multiple,
  single,
  register,
  onToggle,
  defaultChecked = false // Allow setting defaultChecked if necessary
}) => {

  const handleChange = (e) => {
    const newState = e.target.checked;
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <div className="w-full">
      <h2 className="mb-2 text-sm font-medium leading-6">{label}</h2>
      <label className="inline-flex items-center cursor-pointer me-5">
        <input
          {...register(name)}  // Register with react-hook-form
          type="checkbox"
          onChange={handleChange}  // Handle the change event
          defaultChecked={defaultChecked}  // Optionally set defaultChecked
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-lime-300 dark:peer-focus:ring-lime-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-lime-600"></div>
        <span className="ml-3 text-sm font-medium">
          {defaultChecked ? `${multiple}` : `${single}`}  {/* Display the title based on checked state */}
        </span>
      </label>
    </div>
  );
};

export default MultipleToggleInput;
