import React from 'react';
import "./pager.scss";

interface Props {
    page:number
    pageSize?:number;
    total:number;
    setPageNum:any;
}

const Pager:React.FunctionComponent<Props> = (props) => {
    const pageTotal = Math.ceil( props.total / (props.pageSize as number));
    const createPageBtn = ()=>{
        let listArray = [];
        for(let i=1;i<=pageTotal;i++) {
            listArray.push(<li
                className={`pagerItem fl ${ i===props.page ? 'active' : ''}`}
                key={i}
                onClick={()=>props.setPageNum(i)}
            >{i}</li>)
        }
        return listArray;
    }
    const onAddPage = ()=>{
        if(props.page > 1){
            props.setPageNum(props.page - 1)
        }
    }
    const onReducePage = ()=>{
        if(props.page < pageTotal){
            props.setPageNum(props.page + 1)
        }
    }
    return (
        <ol className="pagerBox clearfix">
            <li className="pagerItem prev fl" onClick={onAddPage}>&lt; </li>
            {createPageBtn()}
            <li className="pagerItem next fl" onClick={onReducePage}>&gt;</li>
        </ol>
    )
};
Pager.defaultProps = {
    pageSize:10
};

export default Pager;
