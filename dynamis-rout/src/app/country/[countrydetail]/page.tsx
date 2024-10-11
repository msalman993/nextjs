/*
import { notFound } from 'next/navigation'; // use for handling  404 pages

type CountryDetailProps = {
    params: {
        countrydetail: string;
    };
}

export async function generateStaticParams() {
    return [
        { countrydetail: 'pakistan' },
        { countrydetail: 'india' },
        { countrydetail: 'bangladesh' },
        { countrydetail: 'iran' },
     ]
}

//Fetch country data in the sever component
async function getCountryData(countryName: string) {
    const countryData = {
        pakistan: {name: 'Pakistan', population: 216565317, capital: 'Islamabad'},
        india: {name: 'India', population: 1380004385, capital: 'New Dehli'},
        bangladesh: {name: 'Bangladesh', population: 13720000, capital: 'Dhaka'},
        iran: {name: 'Iran', population: 89800000, capital: 'Tehran'},
    }
    return countryData[countryName.toLowerCase()] || null;
};

export default async function CountryDetail({ params }: CountryDetailProps) {
    const country = await getCountryData(params.countrydetail);
    //if no country is found trigger the 404 page
    if (!country) {
        notFound
    }
    return (
        <div>
            <h1>COUNTRY DETAILS</h1>
            <h3>Name:{country.name}</h3>
            <h3>Population:{country.population}</h3>
            <h3>Capital:{country.capital}[</h3>
        </div >
    )
}

*/

import { notFound } from 'next/navigation'; // Use for handling 404

type CountryDetailProps = {
  params: {
    countrydetail: string;
  };
};

export async function generateStaticParams() {
  return [
    { countrydetail: 'pakistan' },
      { countrydetail: 'india' },
      { countrydetail: 'bangladesh' },
      { countrydetail: 'iran' },
    // Add more countries if needed
  ];
}

// Fetch country data in the server component
async function getCountryData(countryName: string) {
  const countryData = {
    pakistan: { name: 'Pakistan', population: '216565317', capital: 'Islamabad' },
      india: { name: 'India', population: '1380004385', capital: 'New Delhi' },
      bangladesh: {name: 'Bangladesh', population: 13720000, capital: 'Dhaka'},
        iran: {name: 'Iran', population: 89800000, capital: 'Tehran'},
    // Add more country data here
  };

  return countryData[countryName.toLowerCase()] || null;
}

export default async function CountryDetail({ params }: CountryDetailProps) {
  const country = await getCountryData(params.countrydetail);

  // If no country is found, trigger the 404 page
  if (!country) {
    notFound();
  }

  return (
    <div>
      <h1>COUNTRY DETAILS</h1>
      <h3>Name: {country.name}</h3>
      <h3>Population: {country.population}</h3>
      <h3>Capital: {country.capital}</h3>
    </div>
  );
}