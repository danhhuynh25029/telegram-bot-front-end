import React from "react";
import { Pagination } from 'antd';

const Pagi = () => {
    return (
        <>
         <Pagination defaultCurrent={1} total={50} />;
        </>
    )
}

export default Pagi;