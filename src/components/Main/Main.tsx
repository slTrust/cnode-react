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
    useEffect(() => {
       http.get('api/v1/topics',{}).then((res:any)=>{
           let xxx = res.data;
           (xxx as Array<any>).map((a)=>{
               return 1;
           });
           console.log(res.data[0])
           setData( res.data);
       });
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
                        <div className="fl"><a href="">全部</a></div>
                        <div className="fl"><a href="">精华</a></div>
                        <div className="fl"><a href="">分享</a></div>
                        <div className="fl"><a href="">问答</a></div>
                        <div className="fl"><a href="">招聘</a></div>
                        <div className="fl"><a href="">客户端测试</a></div>
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
