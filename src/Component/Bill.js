import { Component } from "react";
import ReactToPrint from "react-to-print";
import Table from "./Table";

class Bill extends Component {


    render() {
        return (
            <div >
                <div ref={el => (this.componentRef = el)}>
                    <Table />
                </div>
                <div className="text-center mt-3">
                <ReactToPrint   
                    trigger={() => <button className="btn btn-outline-dark text-capitalize mt-4">print</button>}
                    content={() => this.componentRef}
                />
                </div>
                
            </div>
        )
    }
}





export default Bill

