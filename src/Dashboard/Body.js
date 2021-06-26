import React from 'react';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import EmployeeTable from '../Components/EmployeeTable';

function Body() {

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
                        <div className="w-1/2 px-6 py-3 border-l border-r border-gray-200 ...">
                            <h5>
                                <span className="block font-semibold text-xl">16</span>
                                <span className="block text-gray-500 text-sm">Company Coaches</span>
                            </h5>
                        </div>
                        <div className="w-1/2 px-6 py-3 border-l border-r border-gray-200 ...">
                            <h5>
                                <span className="block font-semibold text-xl">0</span>
                                <span className="block text-gray-500 text-sm">Completed Session this month</span>
                            </h5>
                        </div>
                    </div>
                    <div className="lg:w-1/4 w-full flex justify-between px-6 py-3 ...">
                        <h5>
                            <span className="block font-semibold text-xl">5.7 Hours</span>
                            <span className="block text-gray-500 text-md">Time spent on micro-learning</span>
                        </h5>
                    </div>
                </div>
                <div className="tabs flex items-center pt-2 border-b border-gray-200">
                    <h5 className="text-blue-600 text-sm border-b-2 border-blue-600 pb-1 px-2 ml-5">Employee List</h5>
                    <h5 className="text-gray-600 text-sm pb-1 px-2 ml-5">Coaches List</h5>
                </div>


                <EmployeeTable />
            </div>
        </div>
    )
}

export default Body
