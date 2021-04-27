import React from "react"
import Carrousel from "./Carrousel"


const DisplayFeature =()=>{
    let count = 0
    const mockObj2 =[
        {
            title: "front end developer",
            logo: "https://media-exp1.licdn.com/dms/image/C560BAQE2QLzMgYzjlg/company-logo_100_100/0/1592514219542?e=1627516800&v=beta&t=kxDJTPeV721p1Qrj_uDndONX-5Mb1uENazn61wlXwj4",
            location:"Tel-Aviv Israel",
            scope:"Full time",
            companySize:"40-0 people",
            publisherName:"Michal",
            publisherPic:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        },
        {
            title: "front end developer",
            logo: "https://media-exp1.licdn.com/dms/image/C560BAQE2QLzMgYzjlg/company-logo_100_100/0/1592514219542?e=1627516800&v=beta&t=kxDJTPeV721p1Qrj_uDndONX-5Mb1uENazn61wlXwj4",
            location:"Tel-Aviv Israel",
            scope:"Full time",
            companySize:"40-0 people",
            publisherName:"Michal",
            publisherPic:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        }

    ]

    const mockObj={
        title: "front end developer",
        logo: "https://media-exp1.licdn.com/dms/image/C560BAQE2QLzMgYzjlg/company-logo_100_100/0/1592514219542?e=1627516800&v=beta&t=kxDJTPeV721p1Qrj_uDndONX-5Mb1uENazn61wlXwj4",
        location:"Tel-Aviv Israel",
        scope:"Full time",
        companySize:"40-0 people",
        publisherName:"Michal",
        publisherPic:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
    
    
    
    return<>
    <div className ="displayfeature">
        <Carrousel data = {mockObj2}/>
    </div>
    </>
}

export default DisplayFeature



