import React from 'react'
import WebContext from '../../context/WebContext'

function WebCourse() {

  return (
    <div>
        <WebContext.Consumer>
            {({ webDevCourse, setWebDevCourse }) => (
            <div>
                <div>name: {webDevCourse.name}</div>
                <div>price: {webDevCourse.price}</div>
                <div>duration: {webDevCourse.duration}</div>
            </div>
            )}
        </WebContext.Consumer>
    </div>
  )
}

export default WebCourse