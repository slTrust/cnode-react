import React, {ReactDOM, useEffect, useState} from 'react';
import "./detail.scss";
import http from "../../util/fetch";
const ReactMarkdown = require('react-markdown/with-html')

interface Props {
    match:any;
}

const Detail:React.FunctionComponent<Props> = (props) => {
    const [info,setInfo] = useState(null);
    let id = props.match.params.id;
    const getContent = () =>{
        http.get(`/api/v1/topic/${id}`,{}).then((res:any)=>{
            console.log(res.data)
            setInfo(res.data);
        });
    };

    useEffect(() => {
        getContent();
    }, []);

    return (
        <div className="cnode-detail">
            <div className="cnode-detail-inner container">
                {info!==null ?
                    (<div className="content">
                        <div className="header">
                            <div className="title">
                            <span className="titleBox">
                                <span className="tip">置顶</span>&nbsp;
                                {(info as any).title}
                            </span>
                            </div>
                            <span className="info">
                            发布于7天前-作者 {(info as any).author.loginname}- {(info as any).visit_count}次浏览- 来自{(info as any).tab}
                        </span>
                        </div>
                        <div className="panel">
                            <ReactMarkdown
                                source={(info as any).content}
                                escapeHtml={false}
                            />
                        </div>
                    </div>)
                    :null}
            </div>
        </div>
    )
};

export default Detail;
