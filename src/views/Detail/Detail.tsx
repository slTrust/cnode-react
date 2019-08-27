import React, {ReactDOM, useEffect, useState} from 'react';
import "./detail.scss";
import http from "../../util/fetch";
const ReactMarkdown = require('react-markdown/with-html')

interface Props {
    match:any;
}

const Detail:React.FunctionComponent<Props> = (props) => {
    const [content,setContent] = useState('');
    let id = props.match.params.id;
    const getContent = () =>{
        http.get(`/api/v1/topic/${id}`,{}).then((res:any)=>{
            console.log(res.data)
            setContent(res.data.content);
        });
    };

    useEffect(() => {
        getContent();
    }, []);

    return (
        <div className="cnode-detail">
            <div className="cnode-detail-inner container">
                <div className="content">
                    <div className="header">
                        <div className="title">
                            <span className="titleBox">
                                <span className="tip">置顶</span>&nbsp;
                                Node 地下铁第九期「杭州站」线下沙龙邀约 - Let's Go Deep
                            </span>
                        </div>
                        <span className="info">
                            发布于7天前-作者 xxx- 2555次浏览- 来自分享
                        </span>
                    </div>
                    <div className="panel">
                        <ReactMarkdown
                            source={content}
                            escapeHtml={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Detail;
