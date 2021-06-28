import React from 'react';
import UnfoldMoreOutlinedIcon from '@material-ui/icons/UnfoldMoreOutlined';


function EmployeeTable(props) {
    console.log(props.sorting)
    return (
        <div className="w-full relative table-container px-6 bg-blue-100">
            <table className="table table-hover table-responsive table-bordered">
                <thead className="">
                    <tr className="">
                        <th className="font-normal">Employee {props.sorting.one} <UnfoldMoreOutlinedIcon className="" /></th>
                        <th className="font-normal text-left ">Employee {props.sorting.two} <UnfoldMoreOutlinedIcon className="" /></th>
                        <th className="font-normal text-left ">Employee {props.sorting.three} <UnfoldMoreOutlinedIcon className="" /></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.employee && props.employee.map(employe => (
                            <tr key={employe.id} className="bg-white border-b-4 border-gray-100">
                                <th className="font-normal text-left  ">{
                                    props.arrangement.one==="id" 
                                    ?
                                    employe.id
                                    :
                                        props.arrangement.one==="name"
                                        ?
                                        employe.name
                                        :
                                            props.arrangement.one==="email"
                                            ?
                                            employe.email
                                            :
                                            ""
                                }</th>
                                <th className="font-normal text-left  ">{
                                    props.arrangement.two==="id" 
                                    ?
                                    employe.id
                                    :
                                        props.arrangement.two==="name"
                                        ?
                                        employe.name
                                        :
                                            props.arrangement.two==="email"
                                            ?
                                            employe.email
                                            :
                                            ""
                                }</th>
                                <th className="font-normal text-left  ">{
                                    props.arrangement.three==="id" 
                                    ?
                                    employe.id
                                    :
                                        props.arrangement.three==="name"
                                        ?
                                        employe.name
                                        :
                                            props.arrangement.three==="email"
                                            ?
                                            employe.email
                                            :
                                            ""
                                }</th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        
        </div>
    )
}

export default EmployeeTable
