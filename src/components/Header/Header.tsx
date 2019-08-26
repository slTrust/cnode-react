import React from 'react';
import "./header.scss";
import a from '../../cnodejs_light.svg';
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
                    {['首页','入门','API','关于','注册','登录'].map(title =>{
                        return <li className="fl" key={title}>{title}</li>;
                    })}
                </ul>
            </div>

        </div>
    );
};

export default Header;
