import React from "react";
import {
    loading,
    block,
    item,
} from './loading-page.module.css'

const LoadingPage = () => {
    return (
        <>
            <div className={loading}>
                <div className={block}>
                    <div className={item}></div>
                    <div className={item}></div>
                    <div className={item}></div>
                    <div className={item}></div>
                    <div className={item}></div>
                    <div className={item}></div>
                    <div className={item}></div>
                    <div className={item}></div>
                </div>
            </div>

        </>
    )
}

export default LoadingPage