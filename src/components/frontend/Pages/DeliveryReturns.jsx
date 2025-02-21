"use client";

import { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import { Send } from "lucide-react";
import Link from "next/link";

const DeliveryReturns = () => {
  // Default country set to Bangladesh (ISO code: "BD")
  const [selectedCountry, setSelectedCountry] = useState("BD");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const countries = Country.getAllCountries();
  const states = State.getStatesOfCountry(selectedCountry) || [];
  const cities = selectedState ? City.getCitiesOfState(selectedCountry, selectedState) : [];

  // Automatically load states when country changes
  useEffect(() => {
    if (selectedCountry) {
      const defaultStates = State.getStatesOfCountry(selectedCountry);
      if (defaultStates.length > 0) {
        setSelectedState(defaultStates[0].isoCode);
      }
    }
  }, [selectedCountry]);

  // Automatically load cities when state changes
  useEffect(() => {
    if (selectedState) {
      const defaultCities = City.getCitiesOfState(selectedCountry, selectedState);
      if (defaultCities.length > 0) {
        setSelectedCity(defaultCities[0].name);
      }
    }
  }, [selectedState, selectedCountry]);

  return (
    <div className="h-auto col-span-3 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700">
      <h2 className="px-6 py-3 text-lg font-semibold text-center border-b bg-slate-100 dark:bg-gray-800 dark:text-white dark:border-gray-600">
        Delivery & Returns
      </h2>
      
      <div className="p-4">
        {/* Delivery Info */}
        <div className="flex items-center gap-3 px-4 py-2 text-white bg-orange-500 rounded-lg max-w-[200px]">
          <span>My Mart Express</span>
          <Send />
        </div>
        
        <div className="flex items-center gap-3 py-3 text-gray-700 border-b border-gray-400 dark:text-white">
          <p>Eligible for Free Delivery</p>
          <Link href="/" className="text-blue-500 hover:underline">
            View Details
          </Link>
        </div>

        {/* Dynamic Location Selection */}
        <div>
          <h2 className="py-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
            Choose your location
          </h2>

          {/* Country Dropdown */}
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">Country</label>
            <select
              id="country"
              className="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setSelectedState("");
                setSelectedCity("");
              }}
            >
              {countries.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* State Dropdown */}
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">State</label>
            <select
              id="state"
              className="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setSelectedCity("");
              }}
              disabled={!states.length}
            >
              {states.length ? (
                states.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))
              ) : (
                <option value="">No states available</option>
              )}
            </select>
          </div>

          {/* City Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">City</label>
            <select
              id="city"
              className="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              disabled={!cities.length}
            >
              {cities.length ? (
                cities.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))
              ) : (
                <option value="">No cities available</option>
              )}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryReturns;
