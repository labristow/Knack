import React, { useEffect, useState } from 'react';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import EmployeeTable from '../Components/EmployeeTable';
import axios from 'axios';

function Body() {
    const [employee, setEmployee] = useState(null);
    const [sortBy, setSortBy] = useState(false);
    const [sorting, setSorting] = useState({one: "ID", two: "Name", three: "Email"});
    const [arrangement, setArrangement] = useState({one: "id", two: "name", three: "email"});

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
            setEmployee(response.data);
        })
    }, []);

    const sortByID = () => {
        function compareName(a, b) {
            if (a.id < b.id) {
                return -1;
            }
            if (a.id > b.id) {
                return 1;
            }
            return 0;
        }
        axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
            setSortBy(!sortBy);
            setSorting({one: "ID", two: "Name", three: "Email"});
            setArrangement({one: "id", two: "name", three: "email"});
            setEmployee(response.data.sort(compareName));
        })
    }

    const sortByName = () => {
        function compareName(a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        }
        axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
            setSortBy(!sortBy);
            setSorting({one: "Name", two: "Email", three: "ID"});
            setArrangement({one: "name", two: "email", three: "id"});
            setEmployee(response.data.sort(compareName));
        });
    }

    const sortByEmail = () => {
        function compareName(a, b) {
            if (a.email < b.email) {
                return -1;
            }
            if (a.email > b.email) {
                return 1;
            }
            return 0;
        }
        axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
            setSortBy(!sortBy);
            setSorting({one: "Email", two: "ID", three: "Name"});
            setArrangement({one: "email", two: "id", three: "name"});
            setEmployee(response.data.sort(compareName));
        })
    }

    const sortHandler = (e) => {
        const id = e.target.id
        document.querySelectorAll(".sortNav").forEach(sortnav => sortnav.classList.remove("sort-active"));
        document.querySelector("#"+id).classList.add("sort-active");

        if(id === "id"){
            sortByID();
        }else if(id === "name"){
            sortByName();
        }else if(id === "email"){
            sortByEmail();
        }
    }

    return (
        <div className="body flex w-full border border-gray-200">
            <div className="w-20 h-full relative border-r border-gray-200">
                <div className="side-nav w-full h-12 flex items-center justify-center">
                    <AlternateEmailOutlinedIcon className="text-blue-600" />
                </div>
                <div className="side-nav w-full h-12 flex items-center justify-center">
                    <GroupOutlinedIcon className="text-blue-600" />
                </div>
                <div className="side-nav w-full h-12 flex items-center justify-center">
                    <BarChartOutlinedIcon className="text-blue-600" />
                </div>
            </div>
            <div className="w-full h-full main relative">
                <div className="w-full lg:h-24 h-auto border-b border-gray-200 lg:flex block">
                    <div className="lg:w-1/4 w-full flex justify-between px-6 py-3 ...">
                        <h5 className="font-semibold text-xl">Employee</h5>
                        <h5>
                            <span className="block font-semibold text-xl">35</span>
                            <span className="block text-gray-500 text-md">Members</span>
                        </h5>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-between ...">
                        <div className="w-1/2 px-6 py-3 border-l border border-gray-200 ...">
                            <h5>
                                <span className="block font-semibold text-xl">16</span>
                                <span className="block text-gray-500 text-sm">Company Coaches</span>
                            </h5>
                        </div>
                        <div className="w-1/2 px-6 py-3 border-l border border-gray-200 ...">
                            <h5>
                                <span className="block font-semibold text-xl">0</span>
                                <span className="block text-gray-500 text-sm">Completed Session this month</span>
                            </h5>
                        </div>
                    </div>
                    <div className="lg:w-1/4 w-full flex justify-between px-6 border border-gray-100 py-3 ...">
                        <h5>
                            <span className="block font-semibold text-xl">5.7 Hours</span>
                            <span className="block text-gray-500 text-sm">Time spent on micro-learning</span>
                        </h5>
                    </div>
                </div>
                <div className="tabs flex items-center pt-2 border-b border-gray-200">
                    <h5 className="text-blue-600 text-sm pb-1 px-2 ml-0">Sort By: </h5>
                    <h5 id="id" className="cursor-pointer sortNav text-gray-600 text-sm pb-1 px-2 ml-3 sort-active" onClick={sortHandler}>ID</h5>
                    <h5 id="name" className="cursor-pointer sortNav text-gray-600 text-sm pb-1 px-2 ml-3" onClick={sortHandler}>Name</h5>
                    <h5 id="email" className="cursor-pointer sortNav text-gray-600 text-sm pb-1 px-2 ml-3" onClick={sortHandler}>Email</h5>
                </div>


                <EmployeeTable employee={employee} sorting={sorting} arrangement={arrangement}/>
            </div>
        </div>
    )
}

export default Body
