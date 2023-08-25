import React from 'react'
import SearchIcon from '../../../public/icons/search.svg'
import styles from './header.module.scss'
import Image from 'next/image'
import InfoIcon from '../../../public/icons/info.svg'
import BellIcon from '../../../public/icons/bell.svg'
const Header = () => {
  return (
    <header className={styles.header}>
       <div className="contain">
        <div className={styles.wrap}>
            <div className={styles.logo}>
            <div className={styles.imageholder}>
                <Image
                src="/images/emplogo.png"
                fill
                sizes='200'
                alt='logo'
                />
            </div>
            <p>Employee Management</p>  
            </div>
        <div className={styles.search}>
            <div className={styles.bar}>
                <SearchIcon className={styles.icon}/>
                <input type="text" placeholder='Search a User' />
            </div>
            <div className={styles.notify}>
                <div className={styles.circle}>
                <InfoIcon className={styles.icon}/>
                </div>
                <div className={styles.circle}>
                <BellIcon className={styles.icon}/>
                </div>
                <div className={styles.circle}>
                <div className={styles.imagehold}>
                <Image
                src="/images/profile.jpg"
                fill
                sizes='200'
                alt='logo'
                />
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>  
    </header>
  )
}

export default Header
