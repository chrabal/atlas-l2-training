import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   // this is also a valid comment
  /* this is also valid */
    <section className={styles.container}>
      {/* JSX comment*/}
      <section>
        <h3 className={styles.paras}>Objective</h3>
        <p className={styles.otherother}>Here are some objectives!!!</p>
      </section>
       {/* JSX comment*/}
      <section>
        <h3 className={styles.paras}>Experience</h3>
        <p className={styles.otherother}>Here are some experiences!!!</p>
      </section>
       {/* JSX comment*/}
      <section>
        <h3 className={styles.paras}>Education</h3>
        <p className={styles.otherother}>Here is my education!!!!!!!!</p>
      </section>
      {/* JSX comment*/}
      <section>
      <p className={styles.paras}>Fun</p>
      <h3 className={styles.otherother}>This is fun!</h3>
      <p className={styles.paras}>Fun2</p>
      <h3 className={styles.otherother}>This is fun!</h3>
      <p className={styles.paras}>Fun3</p>
      <br></br>
      <br></br>
      {/* It also works 
       for multi-line comments. 
      comment
      commment
      */}
      {
      //more comments woo!!!! 
      }
      <h2 className={styles.paras}>Hello, my name is Craig Hrabal</h2>
      <h1 className={styles.otherother}>I am learning!</h1>
      <h2 className={styles.paras}>It is a lot of fun to learn HTML and JS and React</h2>
      </section>
    </section>
  // this is also a valid comment
  /* this is also valid */
  )
}
