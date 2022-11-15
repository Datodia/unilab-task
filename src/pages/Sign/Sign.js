import styles from './Sign.module.css'
import { useNavigate } from 'react-router-dom'

export const Sign = ({ img, onChange, name, setName }) => {
    const navigate = useNavigate()


    const handleClick = () => {
        if (name && img) {
            return navigate("/todo")
        }
    }

    const nameChange = (e) => {
        setName(e.target.value)
    }

    return (
        <div className={styles.sign}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Get Started</h1>
                <div className={styles.img}>
                    <label for="test" className={styles.label}>add a photo</label>
                    <input id='test' onChange={(e) => { onChange(e) }} type="file" />
                    <label className={styles.circle} for='test'>
                        {img ? <img src={img} /> : <img className={styles.camera} src='assets/imgCover.svg' />}
                    </label>
                </div>

                <div className={styles.name}>
                    <label className={styles.label}>fill in you name</label>
                    <input onChange={(e) => nameChange(e)} value={name} type='text' placeholder='your name' />
                </div>

                <button className={styles.button} onClick={handleClick}>Sign up</button>
            </div>
        </div>

    )
}
