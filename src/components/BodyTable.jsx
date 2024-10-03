import { Component } from 'react'
import { status, color } from '../constants/status'
import PopUpAccept from './PopUpAccept'
import OrderDetail from './OrderDetail'
import moment from 'moment';
import { format } from 'date-fns';
// import { table } from '../redux/tableReducer'
import { connect } from 'react-redux'
class BodyTable extends Component {
    hiddenData = () => {
        this.setState({ isShow: false })
    }
    // changeStatus = (item) => {
    //     if (item.statusCode === 1) {
    //         item.statusCode = 2;
    //     }
    //     this.setState({}); // This will trigger a re-render
    // }
    render() {
        // this.props.table(2)
        let header = this.props.headerTable;
        console.log(this.props.tableData.table, "sasa")
        const dataTable = this.props.tableData.table?.map(item => ({
            ...item,
            orderDate: format(new Date(item.ordertime), 'dd/MM/yyyy'),
            order_Time: format(new Date(item.ordertime), 'HH:mm:ss'),
            sum: item?.orderFood?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0
        }))
        let body = dataTable;
        return (
            <tbody className="bg-white divide-y divide-gray-200 ">
                {body?.map((item, index) => {
                    console.log(item, "item")
                    return <tr key={index} className='px-4 py-2'>
                        {header?.map(cur => {
                            return <td className="text-center px-6 py-4 whitespace-nowrap" key={cur.key}>
                                <div className="text-sm">{item?.[cur.key]}</div>
                            </td>
                        })}
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className={"mx-auto px-2 flex items-center text-sm w-3/5 leading-5 font-semibold rounded-md " + color[item?.statuscode]}>
                                <p className='mx-auto'>{status[item?.statuscode]}</p>
                            </span>
                        </td>
                        {header[2]?.key === 'orderDate' && (<td className="flex justify-center px-6 py-4 whitespace-nowrap text-sm">
                            <PopUpAccept item={item} getChangeStatus={this.props.getChangeStatus} />
                            <OrderDetail item={item} getChangeStatus={this.props.getChangeStatus} />
                        </td >)
                        }
                    </tr>
                })}
            </tbody >
        )
    }
}
// export default BodyTable;
// const mapDispatchToProps = {table}
// export default connect(null, mapDispatchToProps)(BodyTable);
const mapStateToProps = (state) => ({ tableData: state.tableReducer })

// const mapDispatchToProps = { getChangeStatus }

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps)(BodyTable);
