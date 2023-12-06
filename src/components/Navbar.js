import React from 'react'

export const Navbar = ({setcategory, setcountry}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" >
        <div className="container-fluid">
          <a className="navbar-brand badge text-bg-light fs-4" href="/"><span className='badge bg-danger'>GlobalPress</span> Hub</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="nav-link acive text-light" aria-current="page" onClick={()=>{setcategory("general")}}>Home</div>
              </li>

              <li className="nav-item">
                <div className="nav-link text-light" aria-current="page" onClick={()=>{setcategory("business")}}>Business</div>
              </li>

              <li className="nav-item">
                <div className="nav-link text-light" aria-current="page" onClick={()=>{setcategory("entertainment")}}>Entertainment</div>
              </li>

              <li className="nav-item">
                <div className="nav-link text-light" aria-current="page" onClick={()=>{setcategory("health")}}>Health</div>
              </li>

              <li className="nav-item">
                <div className="nav-link text-light" aria-current="page" onClick={()=>{setcategory("science")}}>Science</div>
              </li>

              <li className="nav-item">
                <div className="nav-link text-light" aria-current="page" onClick={()=>{setcategory("sports")}}>Sports</div>
              </li>

              <li className="nav-item">
                <div className="nav-link text-light" aria-current="page" onClick={()=>{setcategory("technology")}}>Technology</div>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Country
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><a className="dropdown-item " onClick={()=>{setcountry("in")}}>India</a></li>
                  <li><a className="dropdown-item " onClick={()=>{setcountry("us")}}>US</a></li>
                  <li><a className="dropdown-item " onClick={()=>{setcountry("ca")}}>Canada</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
