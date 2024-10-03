import { Component } from "react";
import Header from "../layout/Header";
import Taskbar from "../layout/Taskbar";
import moment from 'moment';
import { createPortal } from "react-dom";
import HeaderTable from "../components/HeaderTable";
import BodyTable from "../components/BodyTable";
import { table } from '/src/data/data.js';
import Pagination from "../components/Pagination";
import OrderDetail from "../components/OrderDetail";
import "../styles/FoodManagement.css";

export default class ViewOrders extends Component {
    constructor(props) {
        super(props);
        this.state = 
            {
                page: "1",
                limit:"5"
            }
        
    // this.OrderTable.forEach(order => {
    // order.orderDate = moment.unix(order.orderTime).format('DD/MM/YYYY'); // replace "your date here" with the actual date
    //  console.log(this.OrderTable);
}
    Column = [
        {
            name: 'TableId',
            key: 'tabledID'
        },
        {
            name: 'Order Time',
            key: 'order_Time'
        },
        {
            name: 'Order Day',
            key: 'orderDate'
        },
        {
            name: 'Total',
            key: 'sum'
        },
        // {
        //     name: 'Status',
        //     key: 'statusCode'
        // }
    ]
    state = {  
        isShow: false,
      }
    hiddenData = () => {
        this.setState({isShow: false})
    }
    // Pagination
    getTable = (page, limit) => {
        let array = [];
        for (let i = (page - 1)* limit; i< (page*limit); i++ ) {
            array.push(this.OrderTable[i]);
        }
        return array;
    }

    list = Array.from({ length: 3 }, (_, i) => i + 1);
    pageNext = () => {
        this.setState({page: this.state.page + 1})
    }
    pagePrev = () => {
        this.setState({page: this.state.page - 1})
    }
    render() {
        const dataTable = table?.map(item => ({
            ...item,
            orderDate: moment.unix(item.orderTime).format('DD/MM/YYYY'),
            order_Time: moment.unix(item.orderTime).format('HH:mm:ss'),
            sum: item.OrderList.reduce((sum, item) => sum + item.price * item.quantity, 0)
        }))
        // let totalPage = Math.ceil(this.OrderTable.length / this.limit);
        return (          
            <div className="grid grid-cols-12 h-screen w-screen">
                <div className="col-span-2 h-full rounded-lg">
                    <Taskbar />
                </div>
                
                <div className="col-span-10 h-full rounded-lg">
                    <div>
                        <Header pageTitle="Order Management"/>
                    </div>
                    
                    <div className="w-full height-frame p-[3vw]">
                        <table className="table-auto min-w-full divide-y divide-gray-200">
                            <HeaderTable headerTable={this.Column} />
                            {/* <BodyTable headerTable={this.Column} bodyTable={this.OrderTable} onClick={()=> this.setState({isShow: true})} /> */}
                            <BodyTable 
                            headerTable={this.Column} 
                            bodyTable={dataTable} 
                            onClick={()=>{
                                this.setState({isShow: true})
                            }}
                            />
                        </table>
                            <Pagination page={this.Page} pageList={this.list} pageNext={this.pageNext} pagePrev={this.pagePrev}/>
                    </div>
                    {/* {this.state.isShow && (
                        createPortal(
                            <Demo hidden={this.hiddenData} />, document.body
                        )
                    )} */}
                    {this.state.isShow && (
                        createPortal(
                            <OrderDetail hidden={this.hiddenData} />, document.body
                        )
                    )}
                </div>

            </div>

        );
    }
}
