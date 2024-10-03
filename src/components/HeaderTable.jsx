import { Component } from 'react'

export default class HeaderTable extends Component {
    render() {
    let HeaderTable  = this.props.headerTable;    
    return (
      <>
        <thead className="bg-gray-50">
            <tr>
                {HeaderTable.map((item, index) => {
                    return (
                        <th
                            key={index}
                            scope="col"
                            className="px-6 py-3 text-center text-sm text-gray-500 uppercase tracking-wider"
                        >
                            {item.name}
                        </th> 
                    )
                })}
                <th scope="col"
                    className="px-6 py-3 text-center text-sm text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col"
                    className="px-6 py-3 text-center text-sm text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
        </thead>
      </>
    )
  }
}
