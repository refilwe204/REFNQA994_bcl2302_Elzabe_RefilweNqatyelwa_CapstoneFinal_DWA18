
export default function Header() {
  return (
    <div className="bg-dark" >
     <div className="container p-1">
  <div className="d-flex flex-row mb-3 justify-content-center me-5">
    <div className="p2">
      <h1 className="text-light pt-5 px-4 ">Moments </h1>
    </div>
    <div className="p2">
    <img src="https://media3.giphy.com/media/LU0EPR6tWaNREI35hU/giphy.gif?cid=ecf05e47a1wqzy7jr2kvn0evgscohofko2z3xjl41h46ykhm&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="mic" className=" img-thumbnail mt-3 " width="120" height="120"/>
    </div>
    <div className="p2">
    <h1 className="text-light pt-5 px-4">Unplugged</h1>
    </div>
  </div>
  <nav className="navbar ">
  <div className="container-fluid ">
    <form className="d-flex mx-auto ">
      <input className="form-control  rounded-pill border border-5 fs-2 ms-5" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-secondary ms-2" type="submit">Search</button>
    </form>
  </div>
</nav>
  </div>
  </div>
  )
}
