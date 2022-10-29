import styles from './header.module.css';

// create a Header component
const Header = () => {
    // return a header element
    return (
        <header>
            <div className={styles.customTitleShape}>
                <h2 className={styles.customTitle}>H</h2>
            </div>
            <div>
                <span>isham</span>
            </div>
        </header>
    )
}

// export the Header component
export default Header