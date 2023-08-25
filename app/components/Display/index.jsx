import Filter from '../../../public/icons/filter.svg'
import Card from '../card'
import styles from './display.module.scss'

const Display = () => {
  return (
    <div className={styles.em_display}>
         <div className={styles.bar}>
          <p className={styles.title}><span>32</span> Employee</p>
          <div className={styles.btns}>
                  <button className={styles.btn1}><Filter className={styles.icon }/> <span>Filter</span></button>
                  <button  className={styles.btn2}>+ Add Candidate</button>
          </div>  
    </div>
      <div className={styles.cardwrap}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      
    </div>
  )
}

export default Display
