
export default function Home() {
  return (
    <>
      <section id="hero">
        <div className="home">
            <div className="home-caption text-center text-white">
                <h2 className="fw-bold fs-2 text-dark ">Welcome to</h2>
                <h1 className="fw-bold text-dark ">User Mangement System</h1>
                <p className='text-dark text-muted '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quas soluta dolor qui? Ex, culpa inventore.</p>
               
                <div className="buttoms d-flex flex-column flex-md-row  justify-content-center align-items-center gap-4">
                        <button type="button" className="btn btn-light btn-lg">learn more</button>
                        <button type="button" className="btn btn-outline-light btn-lg text-dark">about us</button>
                    </div>
            </div>
        </div>
    </section>

    </>
  )
}
