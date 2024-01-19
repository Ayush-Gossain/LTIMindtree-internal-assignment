
import { useState } from 'react'
import React from 'react'
// import {data} from '../data/data'
import Navbar from './Navbar'



const Home = () => {
    const [filterinput, setFilterinput] = useState("");
    const data = [{
        name: "SmartATP ",
        category: "Production"
    }, {
        name: "ReconSure",
        category: "Production"
    }, {
        name: "Navisource",
        category: "Beta"
    }, {
        name: "Warranty Assistant",
        category: "Beta"
    }, {
        name: "PO Validator ",
        category: "Production"
    }, {
        name: "Returns Processing ",
        category: "Beta"
    }, {
        name: "Code Visualizer ",
        category: "Production"
    }, {
        name: "Impact Analyzer ",
        category: "brak"
    }, {
        name: "ITSM Insights ",
        category: "Production"
    }, {
        name: "DRAKE Agent Assist",
        category: "Production"
    }]

    const [currentPage, setCurrentPage] = useState(1);
    const [datalist, setDatalist] = useState(data);
    const tilesPerPage = 6;
    // const totalTiles = 7;
    const TotalPages = Math.ceil(datalist.length / tilesPerPage);
    const startIndex = (currentPage - 1) * tilesPerPage;
    const endIndex = startIndex + tilesPerPage;
    const currentPageitems = datalist.slice(startIndex, endIndex);
    // setDatalist(currentPageitems)

    
    const HandleFilterApiData = (e) => {
            setFilterinput(e.target.value);
            const filtereddata = data.filter((item) =>
                item.category.toLowerCase().includes(e.target.value.toLowerCase())
            );
            filterinput !== "" ? setDatalist(filtereddata) : setDatalist(currentPageitems);
            console.log(filtereddata, datalist, e.target.value);
    }

   
    // setDatalist(currentPageitems)
    const handlePageChange = (nextPage) => {
        setCurrentPage(nextPage);
    };

    return (
        <div className='main'>
            <Navbar />
            <div>
                <div className='search'>
                    <h1 className='dashboard-text'>
                        Appstore
                    </h1>
                    <input className='input' value={filterinput} onChange={HandleFilterApiData} type='text' />
                </div>

                <div className='card-wrapper'>
                    {
                        currentPageitems.map((item, index) => {
                            return <div className='card'>
                                <div className='card-content'>
                                    <img src='' alt='ai-logo' />
                                    <p className='head-text'>{item.name}</p>
                                    <p className='category-text'>{item.category}</p>
                                    <button className='subscribe'>Subscribe</button>
                                    <button className='use'>Use</button>
                                </div>
                            </div>
                        })


                    }
                </div>

                <div className="tiles-pagination">
                    {Array.from({ length: TotalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={currentPage === index + 1 ? "active" : ""}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Home
