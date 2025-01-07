"use client";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";

const ArrayItemsInput = ({ setItems, items, itemTitle }) => {
  const [item, setItem] = useState("");
  const [showTagForm, setShowTagForm] = useState(false);
  function addItem() {
    if(!item) return;
    setItems([...items, item]);
    setItem("");
  }

  function removeItem(index) {
    const newItem = [...items];
    newItem.splice(index, 1);
    setItems(newItem);
  }
  return (
    <div className="sm:col-span-2">
      {showTagForm ? (
        <div className="flex items-center w-full">
          <div className="flex w-full ">
            <input
              value={item}
              onChange={(e) => setItem(e.target.value)}
              type="text"
              id="voice-search"
              className=" border border-gray-300 text-gray-900 text-sm rounded-lg  
              focus:ring-lime-500 focus:border-lime-500 block w-full ps-10 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-lime-500 dark:focus:border-lime-500"
              placeholder={`Create a ${itemTitle}...`}
            />
            <button
              onClick={addItem}
              type="button"
              className=" flex items-center space-x-2 py-2.5 px-3 ms-2 text-sm font-medium text-white bg-lime-700 rounded-lg border border-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
            >
              <Plus className="w-4 h-4 " />
              <span>Add</span>
            </button>
            <button
              onClick={() => setShowTagForm(false)}
              type="button"
              className="p-4 ml-2 bg-red-600 rounded-full"
            >
              <X className="w-4 h-4 text-slate-50" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowTagForm(true)}
          type="button"
          className="flex items-center px-4 py-2 space-x-2 "
        >
          <Plus />
          <span>Add {itemTitle}</span>
        </button>
      )}
      <div className="flex flex-wrap gap-3 mt-4">
        {items.map((item, i) => {
          return (
            <div
              key={i}
              className="flex items-center px-4 py-2 space-x-2 rounded-md dark:bg-slate-600 bg-slate-300"
            >
              {item}
              <X
                onClick={() => removeItem(i)}
                className="w-4 h-4 cursor-pointer hover:text-red-500"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArrayItemsInput;
