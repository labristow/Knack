import React, { useEffect, useState } from 'react';
import UnfoldMoreOutlinedIcon from '@material-ui/icons/UnfoldMoreOutlined';


function EmployeeTable(props) {
    return (
        <div className="w-full relative table-container px-6 bg-blue-100">
            <table className="table table-hover table-responsive table-bordered">
                <thead className="">
                    <tr className="">
                        <th className="font-normal">Employee ID <UnfoldMoreOutlinedIcon className="" /></th>
                        <th className="font-normal text-left ">Employee Name <UnfoldMoreOutlinedIcon className="" /></th>
                        <th className="font-normal text-left ">Employee Email <UnfoldMoreOutlinedIcon className="" /></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.employee && props.employee.map(employe => (
                            <tr key={employe.id} className="bg-white border-b-4 border-gray-100">
                                <th className="font-normal text-left  ">{employe.id}</th>
                                <th className="font-normal text-left  ">{employe.name}</th>
                                <th className="font-normal text-left  ">{employe.email}</th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        
        </div>
    )
}

export default EmployeeTable
