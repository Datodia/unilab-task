import React, { useState } from 'react'
import styles from './Sign.module.css'
import { useNavigate } from 'react-router-dom'

export const Sign = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [img, setImg] = useState();

    const handleClick = () => {
        if (localStorage.getItem('userName') !== "") {
            return navigate("/todo")
        }
    }

    const handleChange = (event) => {
        const file = event.target.files[0];
        getBase64(file).then(base64 => {
            localStorage["fileBase64"] = base64;
            console.debug("file stored", base64);
        });
    }


    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
            reader.readAsDataURL(file);
        });
    }

    const handleImg = () => {
        setImg(<img src={localStorage.getItem('fileBase64')} />)
    }

    const nameChange = (e) => {
        localStorage.setItem('userName', e.target.value)
        setName(localStorage.getItem('userName'))

    }



    return (
        <div className={styles.sign}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Get Started</h1>
                <div className={styles.img}>
                    <label for="test" className={styles.label}>add a photo</label>
                    <input id='test' onChange={
                        (e) => {
                            handleChange(e);
                            handleImg();
                        }
                    } type="file" />
                    <label className={styles.circle} for='test'>
                        {localStorage.getItem('fileBase64') ? <img src={localStorage.getItem('fileBase64')} /> : <img className={styles.camera} src='assets/imgCover.svg' />}
                        {/* {img && <img style={{ width: 50, borderRadius: 0 }} src='assets/imgCover.svg' />} */}
                    </label>
                </div>

                <div className={styles.name}>
                    <label className={styles.label}>fill in you name</label>
                    <input onChange={(e) => nameChange(e)} value={localStorage.getItem('userName')} type='text' placeholder='your name' />
                </div>

                <button className={styles.button} onClick={handleClick}>Sign up</button>
            </div>
        </div>
    )
}
