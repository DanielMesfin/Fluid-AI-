"use client";

import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";

interface Country {
  name: string;
  code: string;
  flag: string;
}

const countries: Country[] = [
  { name: "United Arab Emirates", code: "AE", flag: "🇦🇪" },
  { name: "United States", code: "US", flag: "🇺🇸" },
  { name: "United Kingdom", code: "GB", flag: "🇬🇧" },
  { name: "Canada", code: "CA", flag: "🇨🇦" },
  { name: "Australia", code: "AU", flag: "🇦🇺" },
  // Add more countries as needed
];

export default function JoinUs() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null); // Allow null
  const [query, setQuery] = useState<string>("");

  const filteredCountries =
    query === ""
      ? countries
      : countries.filter((country) =>
          country.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/assets/myphone.png')`, // Corrected syntax for background image
      }}
    >
      <div className="w-full max-w-md p-6 bg-black bg-opacity-50 rounded-lg backdrop-blur-sm">
        <h1 className="text-4xl font-bold text-white mb-8">
          Join the Fluid AI Waitlist Today!
        </h1>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <Combobox value={selectedCountry} onChange={setSelectedCountry}>
              <Combobox.Label className="block text-sm font-medium text-gray-300">
                Country
              </Combobox.Label>
              <div className="relative mt-1">
                <div className="relative w-full cursor-default overflow-hidden rounded-md bg-gray-800 text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                  <Combobox.Input
                    className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-white bg-gray-800 focus:ring-0"
                    displayValue={(country: Country | null) =>
                      country?.name || ""
                    }
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setQuery(event.target.value)
                    }
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                </div>
                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredCountries.map((country) => (
                    <Combobox.Option
                      key={country.code}
                      className={({ active }: { active: boolean }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-indigo-600 text-white" : "text-gray-300"
                        }`
                      }
                      value={country}
                    >
                      {({
                        selected,
                        active,
                      }: {
                        selected: boolean;
                        active: boolean;
                      }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {country.flag} {country.name} ({country.code})
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-indigo-600"
                              }`}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </div>
            </Combobox>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </div>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
