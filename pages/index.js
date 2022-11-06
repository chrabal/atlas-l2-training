import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   // this is also a valid comment
  /* this is also valid */
    <section className={styles.container}>
      {/* JSX comment*/}
      <section>
        <h3>Objective</h3>
        <p className={styles.paras}>Here are some objectives!!!</p>
      </section>
       {/* JSX comment*/}
      <section>
        <h3>Experience</h3>
        <p>Here are some experiences!!!</p>
      </section>
       {/* JSX comment*/}
      <section>
        <h3>Education</h3>
        <p>Here is my education!!!!!!!!</p>
      </section>
      {/* JSX comment*/}
      <section>
      <p>Fun</p>
      <h3>This is fun!</h3>
      <p>Fun2</p>
      <h3>This is fun!</h3>
      <p>Fun3</p>
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
      <h2>Hello, my name is Craig Hrabal</h2>
      <h1>I am learning!</h1>
      <h2>It is a lot of fun to learn HTML and JS and React</h2>
      </section>
    </section>
  // this is also a valid comment
  /* this is also valid */
  )
}
