import { Component } from "react";
import Header from "../layout/Header";
import Taskbar from "../layout/Taskbar";
import moment from "moment";
import { createPortal } from "react-dom";
import HeaderTable from "../components/HeaderTable";
import BodyTable from "../components/BodyTable";
import { table } from "/src/data/data.js";
import Pagination from "../components/Pagination";
import OrderDetail from "../components/OrderDetail";
import instance from "../api/util";
import pathlogin from '../api/enpoint'
import { connect } from 'react-redux';
import { toggleSidebar } from '../redux/taskbarReducer';

export class ViewOrders extends Component {
    state = {
        currentPage: 1,
        itemsPerPage: 12,
        isShow: false,
    };
    handleNextPage = () => {
        this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }));
    };

    handlePreviousPage = () => {
        this.setState((prevState) => ({ currentPage: prevState.currentPage - 1 }));
    };

    handleGoToPage = (pageNumber) => {
        this.setState({ currentPage: pageNumber });
    };

    componentDidMount() {
        instance
            .post(pathlogin.USER.LOGIN, { userName: "admin", pwd: "admin" })
            .then((res) => {
                console.log(res);
            });
    }
    // constructor(props) {
    //     super(props);
    //     this.state =
    //         {
    //             page: "1",
    //             limit:"5"
    //         }

    // this.OrderTable.forEach(order => {
    // order.orderDate = moment.unix(order.orderTime).format('DD/MM/YYYY'); // replace "your date here" with the actual date
    //  console.log(this.OrderTable);
    // }
    Column = [
        {
            name: "TableId",
            key: "tabledID",
        },
        {
            name: "Order Time",
            key: "order_Time",
        },
        {
            name: "Order Day",
            key: "orderDate",
        },
        {
            name: "Total",
            key: "sum",
        }]
    // {
    //     name: 'Status',
    //     key: 'statusCode'
    // }
    ChangeState = async (status) => {
        // this.setState({ status: status });
        this.props.getChangeStatus(Number(status))
        console.log(this.props.getDataOrder)
    }

    render() {
        // console.log(this.props.tableData.table)
        // const dataTable = this.props.tableData.table?.map(item => ({
        //     ...item,
        //     orderDate: moment.unix(item.orderTime).format('DD/MM/YYYY'),
        //     order_Time: moment.unix(item.orderTime).format('HH:mm:ss'),
        //     sum: item.OrderList.reduce((sum, item) => sum + item.price * item.quantity, 0)
        // }))
        // console.log(dataTable);
        // const { currentPage, itemsPerPage} = this.state;
        // const offset = (currentPage - 1) * itemsPerPage;
        // const totalItems = foodItems.length;
        // const totalPages = Math.ceil(totalItems / itemsPerPage);

        // const currentItems = foodItems.slice(offset, offset + itemsPerPage);
        // const pageNumbers = [];
        // let totalPage = Math.ceil(this.OrderTable.length / this.limit);
        return (
            <div className="relative flex h-screen w-screen">
                <div className={`${this.props.taskbar.isOpen ? "w-1/5" : "w-fit"} duration-300 h-full rounded-lg`}>
                    <Taskbar />
                </div>

                <div className="col-span-10">
                    <Header pageTitle="Order Management" />
                    <div className="mt-9 mx-7 overflow-x-auto">

                        <form className="w-48 mr-0 mb-2 flex mx-auto">
                            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select status</label>
                            <select onChange={async (e) => {
                                this.ChangeState(e.target.value)
                            }}
                                id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-25 p-2.5">
                                <option selected>Choose a status</option>
                                <option value="0">Confirmed</option>
                                <option value="1">Finished</option>
                                <option value="2">Delivered</option>
                            </select>
                        </form>



                        <table className="table-auto min-w-full divide-y divide-gray-200">
                            <HeaderTable headerTable={this.Column} />
                            {/* <BodyTable headerTable={this.Column} bodyTable={this.OrderTable} onClick={()=> this.setState({isShow: true})} /> */}
                            <BodyTable
                                getChangeStatus={this.props.getChangeStatus}
                                headerTable={this.Column}
                                // bodyTable={dataTable}
                                onClick={() => {
                                    this.setState({ isShow: true })
                                }}
                            />
                        </table>
                        <Pagination page={this.Page} pageList={this.list} pageNext={this.pageNext} pagePrev={this.pagePrev} />
                        {/* <div className='w-fit'>
                                  <Pagination
                                  currentPage={this.state.currentPage}
                                  totalPages={totalPages}
                                  handleNextPage={this.handleNextPage}
                                  handlePreviousPage={this.handlePreviousPage}
                                  handleGoToPage={this.handleGoToPage}
                                  />
                              </div> */}
                    </div>
                    {/* {this.state.isShow && (
                        createPortal(
                            <Demo hidden={this.hiddenData} />, document.body
                        )
                    )} */}
                    {this.state.isShow &&
                        createPortal(
                            <OrderDetail hidden={this.hiddenData} />,
                            document.body
                        )}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({ taskbar: state.taskbarReducer, dataLogin: state.loginPageReducer })

const mapDispatchToProps = { getChangeStatus, toggleSidebar }

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToProps)(ViewOrders);
