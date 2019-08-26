import React from 'react';
import "./header.scss";
import logo from '../../logo.svg';
import {Link} from "react-router-dom";
interface Props {
    message?: string;
}
const Header:React.FunctionComponent<Props> = (props) => {
    return (
        <div className="cnode-header">
            <div className="cnode-header-inner container clearfix">
                <a href="" className="logo">
                    <img src={logo} alt=""/>
                </a>
                <ul className="nav-bar fr clearfix">
                    {[
                        {title:'首页',path:'/'},
                        {title:'关于',path:'/about'}
                    ].map(item =>{
                        return (
                            <li className="fl" key={item.title}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>);

                    })}
                </ul>
            </div>

        </div>
    );
};

export default Header;
