import styles from './colorCircle.css'

const colorCircle = (props) => {
    return <div className={styles.circle} style={{background: props.acolor}}></div>
}

export default colorCircle