import React, { useEffect, useState } from 'react'

const Table = () => {
  // const [getdata, setgetData] = useState(() => {
  //   return JSON.parse(localStorage.getItem('items') || '[]')
  // }) 
  // console.log(".....",getdata)
  
  
    // if(getdata.length<0){
    //   console.log("true",getdata)
    //   setgetData(JSON.parse(localStorage.getItem('items') || '[]'))
    // }else{
    //   console.log("false",getdata);
    //   setgetData([])
    // }
    let DATA= JSON.parse(localStorage.getItem('items') || '[]')
    console.log("DATA",DATA);
    const [getdata, setgetData] = useState(DATA.length ? DATA : [{ }])

   
 
    console.log(getdata)
  let billData = getdata[getdata.length - 1]
  return (
    <>
      < div className='border mt-5 '>
        <h1 className='text-center fw-bold fs-3'>Bill</h1>
        <div className='m-2 d-flex justify-content-between border p-3'>
          <div >
            <p className='mb-1 text-dark'> <span className='fw-bold'>Name:</span> {billData.name}</p>
            <p className='mb-1 text-dark'> <span className='fw-bold'>Age:</span> {billData.age}</p>
            <p className='mb-1 text-dark'> <span className='fw-bold'>Gender:</span> {billData.gender}</p>
            <p className='mb-1 text-dark'> <span className='fw-bold'>Reported Date:</span>{billData.reported_date}</p>

          </div>
          <div>
            <p className='mb-1 text-dark'> <span className='fw-bold'>Invoice No.: </span>123XXXXXX</p>
            <p className='mb-1 text-dark'> <span className='fw-bold'>Ref by Dr.: </span>{billData.reference}</p>
            <p className='mb-1 text-dark'> <span className='fw-bold'>Mobile No.: </span>{billData.mobile}</p>
            <p className='mb-1 text-dark'> <span className='fw-bold'>Collection Date </span>{billData.collect_date}</p>
          </div>
        </div>

        <div className='m-2 p-3 text-center ' >
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Sr No.</th>
                <th scope="col">Test</th>
                <th scope="col">Price</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>{billData.test}</td>
                <td>{billData.price}</td>

              </tr>
              <tr>
                <td className='fw-bold' colspan="2">Total</td>
                <td className='fw-bold'>RS. {billData.price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Table