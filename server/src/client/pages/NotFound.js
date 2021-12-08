import React from 'react'

const NotFoundPage = ({staticContext={}}) => {
    staticContext.NotFound = true
    return (<h1 className="center-align">Oops, not found</h1>)
}
export default {
    component: NotFoundPage
}