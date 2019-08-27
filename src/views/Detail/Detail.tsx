import React from 'react';
import "./detail.scss";

interface Props {
}

const Detail:React.FunctionComponent<Props> = (props) => {
    return (
        <div className="cnode-detail">
            <div className="cnode-detail-inner container">
                <div className="content">
                    <div className="title">
                        <div>
                            <span className="">置顶</span>
                            Node 地下铁第九期「杭州站」线下沙龙邀约 - Let's Go Deep
                        </div>
                        <div className="info">
                            发布于7天前-作者 xxx- 2555次浏览- 来自分享
                        </div>
                    </div>
                    <div className="panel">
                        <div>
                        这是一次硬核的地下铁沙龙，
                        我们深入 Node.js 运行时底层，
                        来讨论如何进行运行时的优化和诊断，
                        让它可以在 Serverless，IoT 等等场景释放更大的价值。

                        五位重量级的嘉宾，
                        有 Node.js 基金会技术委员会（TSC）唯一中国成员，
                        有来自浏览器厂商的骨灰级技术专家，
                        还有阿里、Rokid 的大牛。

                        欢迎你和我们一起，进入深海。
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Detail;
