import React, { useEffect, useState } from 'react';
import UnfoldMoreOutlinedIcon from '@material-ui/icons/UnfoldMoreOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import axios from 'axios';

function EmployeeTable() {
    const [employee, setEmployee ] = useState(null);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
            setEmployee(response.data);
            console.log(response)
        })
    }, []);

    useEffect(() => {
        console.log(employee)
    }, [employee])
    const ToggleDropDown = () => {
        document.querySelector(".dropdown").classList.toggle("show");
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
        setEmployee(employee.sort(compareName));
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
        const a = employee.sort(compareName);
        setEmployee(a);
    }
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
        setEmployee(employee.sort(compareName));
    }
    
    useEffect(() => {
        alert(employee)
    }, [employee]);

    return (
        <div className="w-full relative table px-6 bg-blue-100">
            <div className="sort-btn" onClick={ToggleDropDown}>
                <span></span>
                <SettingsOutlinedIcon className="text-blue-600 absolute z-10" />
                <div className="dropdown hidden w-36 h-auto bg-white rounded border border-gray-200 absolute top-0 right-0">
                    <h5 className="px-2 text-md text-blue-600 font-semibold">Sort By:</h5>
                    <h5 className="px-2 text-sm border border-gray-100 py-2 text-black" onClick={sortByID}>Employee ID</h5>
                    <h5 className="px-2 text-sm border border-gray-100 py-2 text-black" onClick={sortByName}>Employee Name</h5>
                    <h5 className="px-2 text-sm border border-gray-100 py-2 text-black" onClick={sortByEmail}>Employee Email</h5>
                </div>
            </div>
            <table className="table-auto w-full mt-5">
                <thead className="w-full h-16 bg-white border-b-4 border-gray-100">
                    <tr className="">
                        <th className="font-normal text-left pl-6">Employee ID <UnfoldMoreOutlinedIcon className="ml-2" /></th>
                        <th className="font-normal text-left pl-6">Employee Name <UnfoldMoreOutlinedIcon className="ml-2" /></th>
                        <th className="font-normal text-left pl-6">Employee Email <UnfoldMoreOutlinedIcon className="ml-2" /></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employee
                            ?
                            employee.map(employe => {
                                return (
                                    <tr key={employe.id} className="bg-white border-b-4 border-gray-100">
                                        <th className="font-normal text-left pl-6 py-2">{employe.id}</th>
                                        <th className="font-normal text-left pl-6 py-2">{employe.name}</th>
                                        <th className="font-normal text-left pl-6 py-2">{employe.email}</th>
                                    </tr>
                                )
                            })
                            
                            :

                            ""
                            
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeTable
