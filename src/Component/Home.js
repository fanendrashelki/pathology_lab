import React, { useEffect, useState } from 'react'
import Bill from './Bill';


const Home = () => {

    const [user, setUser] = useState({
        name: "",
        age: "",
        gender: '',
        mobile: '',
        reference: '',
        test: '',
        price: '',
        reported_date: '',
        collect_date: '',
    })
    


    const getlocalData = () => {
        let list = localStorage.getItem('items')
        if (list) {
            return JSON.parse(localStorage.getItem('items'));
        } else {
            return []
        }
    }

    const [data, setData] = useState(getlocalData())


    // Store data in localStorage
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(data));

    }, [data]);


    // handle input
    const handleInput = (e) => {
        const { name, value } = e.target
        setUser((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }
 

    const test = [
        { label: 'Vitamin D-25', value: 'Vitamin D-25' },
        { label: 'Hemoglobin A1C', value: 'Hemoglobin A1C' },
        { label: 'Full Blood Examination ', value: 'Full Blood Examination ' },
        { label: "testosterone", value: "testosterone" },
        { label: "Hemoglobin A1C", value: "Hemoglobin A1C" }]


    const Price = [
        { label: '100', value: 100 },
        { label: '250', value: 250 },
        { label: '350', value: 350 },
        { label: '400', value: 400 },
        { label: "500", value: 500 }]

        // submit form
    const onSubmits = (e) => {
        setData((oldData) => {
            return [...oldData, user]
        })
        setUser('')
        // alert('done')
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 mx-auto mb-5">
                        <form onSubmit={onSubmits}>
                            <h2 className='text-center'>Patient Details</h2>
                            <div className=' mt-3 mb-3'>
                                <input className='form-control' type="text" name="name"
                                    value={user.name}
                                    onChange={handleInput} required
                                    placeholder='Patient Name' autoComplete='off' />
                            </div>

                            <div className=' mt-3 mb-3'>
                                <input className='form-control' type="number" name="age"
                                    value={user.age}
                                    onChange={handleInput} required
                                    placeholder='Age' autoComplete='off' />
                            </div>
                            <div className='d-flex mx-auto'>
                                Gender:
                                <div className="form-check ms-2">
                                    <input className="form-check-input" type="radio" name="gender" value='male' required onChange={handleInput} />
                                    Male
                                </div>
                                <div className="form-check ms-2">
                                    <input className="form-check-input" type="radio" name="gender" value='female' required onChange={handleInput} />
                                    Female
                                </div>
                                <div className="form-check ms-2">
                                    <input className="form-check-input" type="radio" name="gender" value='other' required onChange={handleInput} />
                                    Other
                                </div>
                            </div>

                            <div className=' mt-3 mb-3'>
                                <input className='form-control' type="number" name="mobile"
                                    value={user.mobile}
                                    onChange={handleInput} required
                                    placeholder='Mobile No.' autoComplete='off' />
                            </div>
                            <div className=' mt-3 mb-3'>
                                <input className='form-control' type="text" name="reference"
                                    value={user.reference}
                                    onChange={handleInput} required
                                    placeholder='Ref by Dr.' />
                            </div>
                            <div className='d-flex  mt-3 mb-3 '>
                                <select className="form-select me-1 " name='test' onChange={handleInput} >
                                    <option value="Select">Test</option>
                                    {
                                        test.map((val) => (
                                            <option value={val.value}>{val.label}</option>

                                        ))
                                    }
                                </select>

                                <select className="form-select ms-1" name='price' onChange={handleInput} >
                                    <option selected>Price</option>
                                    {
                                        Price.map((val) => (
                                            <option value={val.value}>{val.label}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className='d-flex justify-content-between mt-3 mb-3 '>
                                <div className=" mb-3">
                                    <label className="form-label">Reported Date</label>
                                    <input className='form-control' type="date" name="reported_date"
                                        value={user.reported_date}
                                        onChange={handleInput} required

                                    />
                                </div>
                                <div className=" mb-3">
                                    <label className="form-label">Collection Date</label>
                                    <input className='form-control' type="date" name="collect_date"
                                        value={user.collect_date}
                                        onChange={handleInput} required

                                    />
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button type="submit" className='btn btn-outline-dark text-capitalize'> Submit
                                </button>
                            </div>

                        </form>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mx-auto ">
                        <Bill />

                    </div>
                </div>
            </div >






        </>
    )
}

export default Home