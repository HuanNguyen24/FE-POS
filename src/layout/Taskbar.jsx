import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleSidebar } from "../redux/taskbarReducer";

export class Taskbar extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         open: true,
    //     };
    // }
    // toggleSidebar = () => {
    //     this.setState((prevState) => ({
    //         open: !prevState.open,
    //     }));
    // }
    render() {
        // const { open } = this.state;
        return (
            <>
                <div className="flex h-full">
                    <div className={`bg-blue-300 h-full ${this.props.taskbar.isOpen ? "w-full" : "w-20"} duration-300 relative`}>
                        {/* Nút thu/mở taskbar */}
                        <div className="flex h-[72px] w-full">
                            <i className={"mx-auto my-auto p-2 fa fa-bars fa-2x cursor-pointer"
                            } aria-hidden="true"
                                onClick={() => this.props.toggleSidebar() }></i>
                        </div>

                        <div className="h-[calc(100% - 72px)] w-full px-5">
                            {/* to PM page */}
                            <div className="inline-flex mt-8">
                                <Link to="/category"><i className={`bg-orange-300 text-2xl p-2 rounded cursor-pointer block float-left fa fa-shopping-cart duration-500 ${open}`} aria-hidden="true"></i></Link>
                                <Link to="/category">
                                    <div className={`gap-x-4 ml-2 flex items-center origin-left font-semibold duration-300 text-md cursor-pointer ${!this.props.taskbar.isOpen && "hidden"} hover:bg-orange-100`}>
                                        Products Management
                                    </div></Link>
                            </div>

                            {/* To OM page */}
                            <div className="inline-flex mt-8">
                                <Link to="/view"><i className={`bg-orange-300 text-2xl p-2 rounded cursor-pointer block float-left fa fa-shopping-cart duration-500 ${open}`} aria-hidden="true"></i></Link>
                                <Link to="/view">
                                    <div className={`gap-x-4 ml-2 flex items-center origin-left font-semibold duration-300 text-md cursor-pointer ${!this.props.taskbar.isOpen && "hidden"} hover:bg-orange-100`}>
                                        Order Management
                                    </div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state)=> ({taskbar: state.taskbarReducer})

const mapDispatchToProps = {toggleSidebar}

export default connect(mapStateToProps, mapDispatchToProps)(Taskbar);