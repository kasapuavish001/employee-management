import Image from 'next/image'
import ThreeIocn from '../../../public/icons/menu-dots.svg'
import Mail from '../../../public/icons/envelope.svg'
import styles from './card.module.scss'
import Phone from '../../../public/icons/phone-call.svg'
const Card = () => {
  return (
   <div className={styles.profiles}>
      <div className={styles.employee}>
        <div className={styles.top}>
          <div className={styles.imagehold}>
          <Image
                src="/images/profile.jpg"
                fill
                sizes='200'
                alt='logo'
                />
          </div>
          <div className={styles.status}></div>
          <button className={styles.btnmenu}>
            <ThreeIocn className={styles.icon}/>
          </button>
        </div>
        <p className={styles.name}>Avish Kasapu</p>
        <p className={styles.role}>Frontend Developer</p>
        <div className={styles.desc}>
          <div className={styles.dept}>
        <p className={styles.deptitle}>Department</p>
        <p className={styles.deptname}>Frontend</p>
        </div>
        <div className={styles.dept}>
          <p className={styles.deptitle}>Hired Date</p>
          <p className={styles.deptname}>7/27/23</p>
        </div>
        </div>
        <div className={styles.contact}>
        <div className={styles.email}>
          <Mail className={styles.icon}/>
          <p className={styles.emailname}>aavish@gamil.com</p>
        </div>
        <div className={styles.email}>
          <Phone className={styles.icon}/>
          <p className={styles.emailname}>99632655855</p>
        </div>
        </div>
      </div>
   </div>
  )
}

export default Card
