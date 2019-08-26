import React, {useEffect, useState} from 'react';
import "./main.scss";
import a from '../../cnodejs_light.svg';
import http from '../../util/fetch';
interface Props {
    message?: string;
}

const Main:React.FunctionComponent<Props> = (props) => {
    let converTime: (last: string, create: string) => string;
    const [data, setData] = useState(null);
    const [navKey,setNavKey] = useState('');
    const navs = [
        {name:'全部',code:''},
        {name:'精华',code:'good'},
        {name:'分享',code:'share'},
        {name:'问答',code:'ask'},
        {name:'招聘',code:'job'}];
    converTime = (last: string, create: string): string => {
        let total =( new Date(last).getTime() - new Date(create).getTime()) / 86400000;
        let res:string = '';
        if(total < 1 ){
            res = `${parseInt(total*24 + '')}小时前`
        }else{
            res = `${parseInt(total + '')}天前`
        }
        return res;
    };

    const onClickNav = (navCode:string,e:any) => {
        e.preventDefault();
        setNavKey(navCode);
        getList(navCode);
        console.log(e.target)
    };
    const getList = (keyword:string) =>{
        http.get('api/v1/topics',{
            tab:keyword
        }).then((res:any)=>{
            console.log(res.data[0]);
            setData( res.data);
        });
    }

    useEffect(() => {
        getList(navKey);
    }, []);
    // @ts-ignore
    return (
        <div className="cnode-main">
            <div className="cnode-main-inner container">
                <div className="sidebar">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>

                <div className="content">
                    <div className="categoryBox clearfix">
                        {navs.map((nav)=>{
                            return (<a key={nav.name}
                                       className={['fl',nav.code===navKey?'active':' '].join(' ')}
                                       href="#"
                                       onClick={(e)=>onClickNav(nav.code,e)}>{nav.name}
                                    </a>)
                        })}
                    </div>
                    <ul className="topic_list">
                        {data !== null && (data as unknown as Array<any>).map((item:any ,index:number)=> {
                            return (
                                <li key={index} className="cell clearfix">
                                    <div className="info fl clearfix">
                                        <img src={item.author.avatar_url} alt=""/>
                                        <span className="count">
                                            <span className="count_of_replies">{item.reply_count}</span>/<span
                                            className="count_of_visits">{item.visit_count}</span>
                                        </span>
                                        {item.top?<span className="put_top">置顶</span>:null}&nbsp;
                                        <span className="topic_title">{item.title}</span>
                                    </div>
                                    <div className="info2 fr">
                                        <img src="" alt=""/>
                                        <span>{converTime(item.last_reply_at,item.create_at)}</span>
                                    </div>
                                </li>)
                        })}
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Main;
