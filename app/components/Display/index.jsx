import Filter from '../../../public/icons/filter.svg'
import Card from '../card'
import styles from './display.module.scss'

const Display = () => {
    return (
        <div className={styles.em_display}>
            <div className={styles.title}>
                <h1>Add New Employee</h1>
            </div>
            <form className={styles.add}>
                <div className={styles.wrap}>
                    <div className={styles.top}>
                        <div className={styles.box}>
                            <label>First Name</label>
                            <input type="text" />
                        </div>
                        <div className={styles.box}>
                            <label>Last Name</label>
                            <input type="text" />
                        </div>
                        <div className={styles.box}>
                            <label>Job Position</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.box}>
                            <label>Email Address</label>
                            <input type="email" />
                        </div>
                        <div className={styles.box}>
                            <label>Phone</label>
                            <input type="number" />
                        </div>
                        <div className={styles.box}>
                            <label>Date of Joining</label>
                            <input type="date" />
                        </div>
                        <div className={styles.box}>
                            <label>Salary</label>
                            <input type="number" />
                        </div>
                    </div>
                    <div className={styles.buttons}>
                            <button className={`${styles.btn} ${styles.btn1}`}>Save</button>
                            <button className={`${styles.btn} ${styles.btn2}`}>Save & Add Another</button>
                            <button className={`${styles.btn} ${styles.btn3}`}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Display
