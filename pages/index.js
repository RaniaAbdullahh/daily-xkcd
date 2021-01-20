import styles from '../styles.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Home(props) {
  return (
    <div className={styles.hello}>
      <Header />
      <p>{props.title}</p>
      <img src={`${props.img}`} />
      <Footer title={props.title} image={props.img} num={props.num} />
    </div>
  )
}

export async function getServerSideProps(){
  const response = await fetch('https://xkcd.com/614/info.0.json')
  const apiData = await response.json()
  return{props:{title:apiData.safe_title, img:apiData.img, num:apiData.num}}
}