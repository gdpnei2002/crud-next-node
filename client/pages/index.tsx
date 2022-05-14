import type { NextPage } from 'next'
import styles from "./styles.module.scss";


const Home: NextPage = () => {
  return (
    <>
    <div className="app-container">
      <div className="register--container">
          <h1>crud</h1>
          <input
            type="text"
            name="name"
            placeholder="nome"
            className="register--input" />
          <input
            type="text"
            name="cost"
            placeholder="preço"
            className="register--input" />
          <input
            type="text"
            name="category"
            placeholder="categoria"
            className="register--input" />
          <button>
            cadastrar
          </button>
      </div>
    </div>
      
    </>
  )
}

export default Home
