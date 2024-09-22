import React from 'react'
import { useState,useEffect } from 'react';
import "../App.css"

const limit = 18;

const Pagination = () =>{
    const [data,setData] = useState([]);
    const [currentPageNo, setCurrentPageNo] =useState(1);
    const totalPages = Math.ceil(data.length / limit);


   const  fetchData = async() =>{
       const response = await fetch("https://restcountries.com/v3.1/all");
       const json = await response.json();
       
       const countryData = json.map((country)=> ({
           name : country.name.common,
           flag : country.flags.svg
        }))
        console.log(countryData);

       setData(countryData);
   }

    useEffect(()=>{
        fetchData();
    },[])

    const displayData = data.slice((currentPageNo -1) * limit ,currentPageNo * limit);

    const goToFirstPage = () => setCurrentPageNo(1);
    const gotToLastPage = () => setCurrentPageNo(totalPages);
    const gotToNextPage = () => {
        setCurrentPageNo((prevPage) => ( (prevPage === totalPages) ? 1 : prevPage + 1 )); // 25 pages , 10 items per page 
    }
    const goToPrevPage = () => {
        setCurrentPageNo((prevPage) =>  (( prevPage - 1 === 0) ? totalPages : prevPage -1) );
    }

    return (
        <div>
            <h1> Country</h1>
            <ul>
                {displayData?.map((item,index) =>(
                    <li key={index}>
                        <span>{item.name}</span>
                        <img src={item.flag} className='imageBox' ></img>
                    </li>
                ))}
            </ul>

            <div>
                <button onClick={()=>{goToFirstPage()}} disabled={currentPageNo === 1}>FP</button>
                <button onClick={()=>{goToPrevPage()}}>Prev</button>
                <span>{currentPageNo}-{totalPages}</span>
                <button onClick={()=>{gotToNextPage()}}>Next</button>
                <button onClick={()=>{gotToLastPage()}} disabled={currentPageNo === totalPages}>LP</button>
            </div>
        </div>

    )





}

export default Pagination