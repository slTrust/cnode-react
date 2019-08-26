import React from 'react';
import "./pager.scss";

interface Props {
    page:number
    pageSize?:number;
    total:number;
    setPageNum:any;
    pageCount?:number;
}

const Pager:React.FunctionComponent<Props> = (props) => {
    const pageTotal = Math.ceil( props.total / (props.pageSize as number));
    const createPageBtn = ()=>{
        let listArray = [];
        let pageTexts = generatePageArray();
        for(let i=0; i < pageTexts.length ; i++) {
            listArray.push(<li
                className={`pagerItem fl ${ pageTexts[i]===props.page ? 'active' : ''}`}
                key={i}
                onClick={()=>{
                    (typeof pageTexts[i] === 'number') && props.setPageNum(pageTexts[i])
                }}
            >{pageTexts[i]}</li>)
        }
        return listArray;
    };

    const generatePageArray = ()=>{
        return unique([1,pageTotal,
            props.page,
            props.page - 1, props.page - 2 ,
            props.page + 1 ,props.page + 2
        ]
            .filter((n)=> n>=1 && n <= pageTotal)
            .sort((a,b)=> a-b))
            .reduce((prev:Array<any>,current:number,index:number,array:Array<any>)=>{
                prev.push(current)
                array[index + 1] !== undefined && array[index + 1] - array[index] > 1 && prev.push('...')
                return prev
            },[])
    }

    function unique(array:Array<any>) {
        // array = [1,1,2,3,5,20]
        // return [... new Set(array)] 兼容性太差
        const object = {};
        array.map((num:string) => {
            // @ts-ignore
            object[num] = true
        })
        return Object.keys(object).map((s)=>parseInt(s))
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
    pageSize:10,
    pageCount:10
};

export default Pager;
