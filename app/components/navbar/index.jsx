import React from 'react'
import styles from './navbar.module.scss'
import App from '../../../public/icons/apps.svg'
import Box from '../../../public/icons/tool-box.svg'
import Calender from '../../../public/icons/calendar.svg'
import Display from '../Display'

const data = [ 
    {
        id:1,
        name : "Dashboard",
        icon : <App className={styles.icon}/> 
    },
    {
        id:2,
        name : "Inbox",
        icon : <Box className={styles.icon}/> 
    },
    {
        id:3,
        name : "Calender &Todo's",
        icon : <Calender className={styles.icon}/> 
    },
]

const data1 = [
    {
        id:4,
        name : "Jobs",
        icon : <App className={styles.icon}/> 
    },
    {
        id:5,
        name : "Candidates",
        icon : <Box className={styles.icon}/> 
    },
    {
        id:6,
        name : "My Referrals",
        icon : <App className={styles.icon}/> 
    },
]

const data2 = [
    {
        id:7,
        name : "Career site",
        icon : <Calender className={styles.icon}/> 
    },
    {
        id:8,
        name : "Setting",
        icon : <Box className={styles.icon}/> 
    },
]
const Navbar = () => {
  return (
    <section>
        <div className="contain">
            <div className={styles.wrap}>
                <ul className={styles.list1}>
                    {data.map((item)=>{
                        return (
                    <li key={item} className={styles.li}>
                        {item.icon}
                        <p>{item.name}</p>
                    </li>
                        )
                    })}
                </ul>
                <ul className={styles.list1}>
                    <h3>RECRUITMENT</h3>
                    {data1.map((item)=>{
                        return (
                    <li key={item} className={styles.li}>
                        {item.icon}
                        <p>{item.name}</p>
                    </li>
                        )
                    })}
                </ul>
                <ul className={styles.list1}>
                    <h3>ORGANIZATION</h3>
                    {data2.map((item)=>{
                        return (
                    <li key={item} className={styles.li}>
                        {item.icon}
                        <p>{item.name}</p>
                    </li>
                        )
                    })}
                </ul>
            </div>
            <Display/>
        </div>
    </section>
  )
}

export default Navbar
