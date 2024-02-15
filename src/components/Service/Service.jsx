import React from 'react'
import SubHeader from '../Shared/SubHeader'
import Footer from '../Shared/Footer/Footer'
import Header from '../Shared/Header/Header'
import img from '../../images/features/baby.png'
import { Link } from 'react-router-dom'
import doctorBg from '../../images/img/doctors-bg.jpg';

const Service = () => {
  const weArePleaseStyle = {
    backgroundColor: "antiquewhite",
    height: "60vh",
    background: `url(${doctorBg}) no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    padding: "10px",
    position: "relative",
    marginTop: 200,
    marginBottom: 100
  }

  const data = [
    {
      type: "Child care",
      description: "Saepe nulla praesentium eaque omnis perferendis a doloremque."
    },
    {
      type: "General Medicine",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, asperiores."
    },
    {
      type: "Dermatology",
      description: "Voluptatibus tempora maiores maxime dolore veniam minus nesciunt."
    },
    {
      type: "Orthopedics",
      description: "Quisquam est officiis expedita quas ipsum culpa consequatur."
    },
    {
      type: "Cardiology",
      description: "Natus repellendus voluptatibus dolorum officiis non illum quae voluptatem."
    },
    {
      type: "Neurology",
      description: "Ducimus velit sed excepturi accusantium iste rerum odit."
    }
  ];
  return (
    <>
      <Header />
      <SubHeader title="Service" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing." />

      <div class="container" style={{ marginTop: 200, marginBottom: 100 }}>
        <div class="row">
          {
            data?.map((_item, id) => (
              <div class="col-lg-4 col-md-6 col-sm-6" key={id + 6}>
                <div class="card shadow border-0 mb-5">
                  <img src={img} alt="" class="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div class="p-2">
                    <h4 class="mt-4 mb-2">{_item?.type}</h4>
                    <p class="mb-4">{_item?.description}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <section style={weArePleaseStyle}>
        <div class="container" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <div class="row">
            <div class="col-lg-7">
              <div class="d-flex align-items-center">
                <div className='mb-4 section-title text-center'>
                  <h2 className='text-uppercase'>We are pleased to offer you the</h2>
                  <p className='form-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed.</p>
                  <Link to={'/doctors'} className="btn-get-started scrollto">Get Started</Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default Service