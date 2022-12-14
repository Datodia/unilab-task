import styles from './Sign.module.css'
import { useNavigate } from 'react-router-dom'

export const Sign = ({ img, onChange, name, setName, setLogedIn }) => {
    const navigate = useNavigate()


    const handleClick = (event) => {
        event.preventDefault();
        if (name && img) {

            setLogedIn(true)
            return navigate("/todo")
        }
    }

    const nameChange = (e) => {
        setName(e.target.value)
    }

    return (
        <form onSubmit={handleClick}>
            <div className={styles.sign}>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>Get Started</h1>
                    <div className={styles.img}>
                        <label for="test" className={styles.label}>add a photo</label>
                        <input id='test' onChange={(e) => { onChange(e) }} type="file" />
                        <label className={styles.circle} for='test'>
                            {img ? <img src={img} alt="" /> : <img className={styles.camera} src={process.env.PUBLIC_URL + '/assets/imgCover.svg'} alt="" />}
                        </label>
                    </div>

                    <div className={styles.name}>
                        <label className={styles.label}>fill in you name</label>
                        <input onChange={(e) => nameChange(e)} value={name} type='text' placeholder='your name' />
                    </div>

                    <input className={styles.submit} type="submit" value={"Sing Up"} />
                </div>
            </div>
        </form>

    )
}
