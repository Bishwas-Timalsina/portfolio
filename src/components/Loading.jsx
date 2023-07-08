import React from 'react'
import gif from '../files/loader.gif'
import './animation.css'

const Loading = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center h-[100vh]'>
                
                <div class='container'>
                    <div class='loader'>
                        <div class='loader--dot'></div>
                        <div class='loader--dot'></div>
                        <div class='loader--dot'></div>
                        <div class='loader--dot'></div>
                        <div class='loader--dot'></div>
                        <div class='loader--dot'></div>
                        <div class='loader--text'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading