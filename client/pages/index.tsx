import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
    <div className="appcontainer">
      <div className="registercontainer">
          <h1>crud</h1>
          <input
            type="text"
            name="name"
            placeholder="nome"
            className="registerinput" />
          <input
            type="text"
            name="cost"
            placeholder="preço"
            className="registerinput" />
          <input
            type="text"
            name="category"
            placeholder="categoria"
            className="registerinput" />
          <button>
            cadastrar
          </button>
      </div>
    </div>
      
    </>
  )
}

export default Home
