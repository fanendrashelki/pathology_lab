import React, { useState } from 'react'

const List = () => {
    const [getlist, setlist] = useState(() => {
        return JSON.parse(localStorage.getItem('items') || '[]')
    })
    return (

        <>
            {
                getlist.length === 0 ?
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12 mx-auto text-center mt-5 ">
                                <h1>Data not Found</h1>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12 mx-auto ">
                                <table class="table text-capitalize">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sr No.</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Mobile</th>
                                            <th scope="col">test</th>
                                            <th scope="col">ref by Dr</th>
                                            <th scope="col">reported Date</th>
                                            <th scope="col">collect Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        {
                                            getlist.map((val, i) => {
                                                return (
                                                    <tr>
                                                        <td>{i + 1}</td>
                                                        <td>{val.name}</td>
                                                        <td>{val.age}</td>
                                                        <td>{val.gender}</td>
                                                        <td>{val.mobile}</td>
                                                        <td>{val.test}</td>
                                                        <td>{val.reference}</td>
                                                        <td>{val.reported_date}</td>
                                                        <td>{val.collect_date}</td>
                                                    </tr>

                                                )
                                            })
                                        }

                                    </tbody>

                                </table>

                            </div>

                        </div>
                    </div>

            }

        </>
    )
}

export default List