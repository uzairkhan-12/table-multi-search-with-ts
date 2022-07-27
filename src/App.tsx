import React, { useState } from 'react';
import './App.css';
 import { recoredInterface } from './interfaces/records.interface';

function App() {
let records:recoredInterface[] = [
{id:1,country:"Pakistan",capital:"Islamabad",city:"Peshawar"},
{id:2,country:"Pakistan",capital:"Islamabad",city:"Karachi"},
{id:3,country:"Pakistan",capital:"Islamabad",city:"Quetta"},
{id:4,country:"Pakistan",capital:"Islamabad",city:"Swabi"},
{id:5,country:"Pakistan",capital:"Islamabad",city:"Raiwind"},
{id:6,country:"America",capital:"Washington DC",city:"New York"},
{id:7,country:"Afghanistan",capital:"Kabul",city:"Khost"},
{id:8,country:"Canada",capital:"Ottawa",city:"Toronto"},
{id:9,country:"Germany",capital:"Berlin",city:"Munich"},
{id:10,country:"Italy",capital:"Rome",city:"Venice"},
{id:11,country:"Turkey",capital:"Ankara",city:"Konya"},
{id:12,country:"UAE",capital:"Abu Dhabi",city:"Dubai"},
{id:13,country:"Saudi Arabia",capital:"Riyadh",city:"Dammam"},
{id:14,country:"Egypt",capital:"Cairo",city:"Alexendria"},
{id:15,country:"Russia",capital:"Moscow",city:"Kazan"},
{id:16,country:"Ukraine",capital:"Kyiv",city:"Lviv"},
{id:17,country:"Bangladesh",capital:"Dhaka",city:"Bogura"},
{id:18,country:"India",capital:"Dehli",city:"Mambai"},
{id:19,country:"Indonesia",capital:"Jakarta",city:"Mali"},
{id:20,country:"Thailand",capital:"Bangkok",city:"krabi"},
{id:21,country:"Afghanistan",capital:"Kabul",city:"Herat"},
{id:22,country:"Afghanistan",capital:"Kabul",city:"Kunduz"},
{id:23,country:"Afghanistan",capital:"Kabul",city:"Ghazni"},
{id:24,country:"Afghanistan",capital:"Kabul",city:"Jalal Abad"},
{id:25,country:"Germany",capital:"Berlin",city:"Leipzig"},
{id:26,country:"Germany",capital:"Berlin",city:"Dresden"},
{id:27,country:"Italy",capital:"Rome",city:"Turin"},
{id:28,country:"Italy",capital:"Rome",city:"Bolonga"},
]
const [countrySearch , setCountrySearch] = useState<string>('')
const [capitalSearch , setCapitalSearch] = useState<string>('')
const [citySearch , setCitySearch] = useState<string>('')
const [countryFilteredArray , setCountryFilteredArray] = useState<recoredInterface[]>([])
const [capitalFilteredArray , setCapitalFilteredArray] = useState<recoredInterface[]>([])
const [cityFilteredArray,setCityFilteredArray] = useState<recoredInterface[]>([])
const [fullRecored,setFullRecored]=useState<recoredInterface[]>([])
function loadData(arg:recoredInterface[]){
  return arg && arg.map((x:any)=>{
    return( <tr key={x.id}>
    <td>{x.country}</td>
    <td>{x.capital}</td>
    <td>{x.city}</td>
  </tr>
  )
})
}

function sortWithCountryDescending(){
  const sortedWithCountry = [...records].sort((a:any,b:any) => a.country > b.country ? -1 : 1)
  console.log(sortedWithCountry)
  setFullRecored(sortedWithCountry)
}
function sortCountryWithAscending(){
  const sortedWithCountry = [...records].sort((a:any,b:any) => a.country > b.country ? 1 : -1)
  console.log(sortedWithCountry)
  setFullRecored(sortedWithCountry)
  
}

function sortWithCapitalDescending(){
  const sortedWithcapital = [...records].sort((a:any,b:any) => a.capital > b.capital ? -1 : 1)
  console.log(sortedWithcapital)
  setFullRecored(sortedWithcapital)
}
function sortCapitalWithAscending(){
  const sortedWithcapital = [...records].sort((a:any,b:any) => a.capital > b.capital ? 1 : -1)
  console.log(sortedWithcapital)
  setFullRecored(sortedWithcapital)
  
}


function sortWithCityDescending(){
  const sortedWithcity = [...records].sort((a:any,b:any) => a.city > b.city ? -1 : 1)
  console.log(sortedWithcity)
  setFullRecored(sortedWithcity)
}
function sortCityWithAscending(){
  const sortedWithcity = [...records].sort((a:any,b:any) => a.city > b.city ? 1 : -1)
  console.log(sortedWithcity)
  setFullRecored(sortedWithcity)
  
}



function sortWithCapital(){
  console.log("sort with capital clicked")
}
function sortWithCity(){
  console.log('sort with city clicked')
}

function onCountryChange(input:React.FormEvent<HTMLInputElement>){
  setCountrySearch(input.currentTarget.value)
let a = records.filter(x=>x.country.toLowerCase().includes(input.currentTarget.value))
setCountryFilteredArray(a)

}

function onCapitalChange(input:React.FormEvent<HTMLInputElement>){
  setCapitalSearch(input.currentTarget.value)
let a = records.filter(x=>x.capital.toLowerCase().includes(input.currentTarget.value))
setCapitalFilteredArray(a) 
}

function onCityChange(input:React.FormEvent<HTMLInputElement>){
  setCitySearch(input.currentTarget.value)
let a = records.filter(x=>x.city.toLowerCase().includes(input.currentTarget.value))
setCityFilteredArray(a) 

}
function resetCountryInput(){
  setCountryFilteredArray([])
  setCountrySearch('')
}
function resetCapitalInput(){
  setCapitalFilteredArray([])
  setCapitalSearch('')
}
function resetCityInput(){
  setCitySearch('')
}
// console.log(records)
  return (
   <div style={{marginLeft:"150px" , marginRight:"150px"}} className="mt-5 container">
    <div className='mb-4'>
    <h2>Table multi search</h2>
    </div>
    <div className='row mb-4'>
      <div className='col-md-3'><input onChange={onCountryChange} onBlur={resetCountryInput} value={countrySearch} type='text' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search by Country" /></div>
      {/* <div className='col-md-4'><input type='text' placeholder="Search by Capital"/></div> */}
      {/* <div className='col-md-4'><input type='text' placeholder="Search by City"/></div> */}
      <div className='col-md-3'><input onChange={onCapitalChange} onBlur={resetCapitalInput} value = {capitalSearch} type='text' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search by Capital" /></div>
      <div className='col-md-3'><input onChange={onCityChange} onBlur={resetCityInput} value={citySearch} type='text' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search by City" /></div>
    </div>
    <div className='row'>
      <div className='col-md-3'>
    <h3>Filtered By:</h3>
    </div>
    <div className='col-md-6'>
    <span style={{padding:"10px", marginRight:"10px"}} className="badge rounded-pill text-bg-secondary">{countrySearch ? countrySearch : "Country"}</span>
    <span style={{padding:"10px", marginRight:"10px"}} className="badge rounded-pill text-bg-secondary">{capitalSearch ? capitalSearch : "Capital"}</span>
    <span style={{padding:"10px", marginRight:"10px"}} className="badge rounded-pill text-bg-secondary">{citySearch ? citySearch : "City"}</span>
    </div>
    <div className='col-md-3'>
    <h5>showing  {countrySearch && countryFilteredArray.length|| 
    capitalSearch && capitalFilteredArray.length || 
    citySearch && cityFilteredArray.length ||
    records && records.length}
    /{records.length} records</h5>
    </div>
    </div>
    <table className="table mt-5">
  <thead>
    <tr>
      <th scope="col">Country 
      <svg onClick={sortCountryWithAscending} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg>
<svg onClick={sortWithCountryDescending} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
</svg>
    </th>
      <th scope="col">Capital <svg onClick={sortCapitalWithAscending} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg>
<svg onClick={sortWithCapitalDescending} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
</svg></th>
      <th scope="col">City <svg onClick={sortCityWithAscending} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg>
<svg onClick={sortWithCityDescending} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
</svg></th>
    </tr>
  </thead>
  <tbody>
   {countrySearch && loadData(countryFilteredArray) || capitalSearch && loadData(capitalFilteredArray) || citySearch && loadData(cityFilteredArray) || fullRecored.length>0 && loadData(fullRecored) || records.length>0 && loadData(records)}
  </tbody>
</table>
   </div>
  );
}

export default App;
