import { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCategory } from '../redux/categoryReducer';
export class CategoryBar extends Component {
  componentDidMount() {
    this.props.getAllCategory();
  }

  render() {
    // console.log('cate', this.props.cate.categories);
    return (
      <div className="h-full w-full justify-start shadow-md rounded-lg border-gray-200 bg-white">
        <div className="flex h-[10%] w-full text-2xl font-semibold">
          <p className="m-4 my-auto">Category</p>
        </div>

        <div className="h-[90%] w-full">
          <ul>
            {/* {this.props.cate.categories.map((category) => (
                <li key={category.categoryId}>
                  <a href="#" className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <div className="div flex gap-2">
                        <i className="fa fa-square" aria-hidden="true"></i>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{category.name}</span>
                        </div>
                    </div>
                    <div className="count">1</div>
                  </a>
                </li>
                ))} */}
          </ul>
        </div>

        <div className="h-[90%] w-full">
          <ul>
            {/* {this.props.cate.categories.map((category) => (
                <li key={category.categoryId}>
                  <a href="#" className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <div className="div flex gap-2">
                        <i className="fa fa-square" aria-hidden="true"></i>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{category.name}</span>
                        </div>
                    </div>
                    <div className="count">1</div>
                  </a>
                </li>
                ))} */}
          </ul>
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state) => ({ cate: state.categoryReducer });

const mapDispatchToProps = { getAllCategory };

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBar);
