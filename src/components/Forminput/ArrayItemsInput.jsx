"use client";
import { Cookie, Plus, X } from "lucide-react";
import React, { useState } from "react";
export const dynamic = "force-dynamic";

const ArrayItemsInput = ({ setItems, items, itemTitle }) => {
  const [item, setItem] = useState("");
  const [showTagForm, setShowTagForm] = useState(false);
  const [error, setError] = useState("");
  

  // Add item function
  function addItem() {
    if (!item) {
      setError("Please enter a value.");
      return;
    }
    if (items.includes(item)) {
      setError("This item already exists.");
      return;
    }
    setItems([...items, item]);
    setItem("");
    setError(""); // Clear error after adding
  }

  // Remove item function
  function removeItem(index) {
    const newItem = [...items];
    newItem.splice(index, 1);
    setItems(newItem);
  }

  return (
    <div className="sm:col-span-2">
      {/* Internal CSS for shake animation */}
      <style jsx>{`
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          50% { transform: translateX(4px); }
          75% { transform: translateX(-4px); }
          100% { transform: translateX(0); }
        }

        .shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>

      {/* Show input form when adding item */}
      {showTagForm ? (
        <div className="flex items-center w-full">
          <div className="relative flex w-full">
            <div className="absolute inset-y-0 flex items-center pointer-events-none rtl:inset-r-0 start-0 ps-3">
              <Cookie className="w-5 h-5 text-gray-700" />
            </div>
            <input
              value={item}
              onChange={(e) => setItem(e.target.value)}
              type="text"
              id="voice-search"
              className={`border text-gray-900 text-sm rounded-lg 
                focus:ring-lime-500 focus:border-lime-500 block w-full ps-10 p-2.5 
                dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-lime-500 
                dark:focus:border-lime-500 ${error ? 'border-red-500 shake' : 'border-gray-300'}`}
              placeholder={`Create a ${itemTitle}...`}
              aria-label={`Create a new ${itemTitle}`}
            />
            <button
              onClick={addItem}
              type="button"
              className="flex items-center space-x-2 py-2.5 px-3 ms-2 text-sm font-medium text-white bg-lime-700 rounded-lg border border-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
              aria-label="Add item"
            >
              <Plus className="w-4 h-4" />
              <span>Add</span>
            </button>
            <button
              onClick={() => setShowTagForm(false)}
              type="button"
              className="p-4 ml-2 bg-red-600 rounded-full"
              aria-label="Cancel adding item"
            >
              <X className="w-4 h-4 text-slate-50" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowTagForm(true)}
          type="button"
          className="flex items-center px-4 py-2 space-x-2 transition text-lime-600 hover:text-lime-800"
          aria-label={`Add ${itemTitle}`}
        >
          <Plus />
          <span>Add {itemTitle}</span>
        </button>
      )}

      {/* Error message */}
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}

      {/* List of items */}
      <div className="flex flex-wrap gap-3 mt-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center px-4 py-2 space-x-2 rounded-md dark:bg-slate-600 bg-slate-300"
          >
            {item}
            <X
              onClick={() => removeItem(i)}
              className="w-4 h-4 cursor-pointer hover:text-red-500"
              aria-label={`Remove ${item}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArrayItemsInput;
