import React from 'react';
import "./header.scss";
import a from '../../cnodejs_light.svg';
import {Link} from "react-router-dom";
interface Props {
    message?: string;
}
const Header:React.FunctionComponent<Props> = (props) => {
    return (
        <div className="cnode-header">
            <div className="cnode-header-inner container clearfix">
                <a href="" className="logo">
                    <img src={a} alt=""/>
                </a>
                {/*<input type="text" className="searchbox"/>*/}
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
