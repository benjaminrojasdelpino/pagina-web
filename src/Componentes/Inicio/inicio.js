import React from 'react';
import "./inicio.css";
 
 
class Inicio extends React.Component {
 
  render() {
 
    return (
        <main role="main">

        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="first-slide" src="https://lh3.googleusercontent.com/proxy/UaWRp6vYAtQK_59C0d-mVUQMiAaub8TeypdyBxFtn1efnrriUseHq-AcuMh6pM5S2DRqYyncrV36LK7ls3KQ_mXcr40LSCq9WfbzulFavAuun4pjgjQukmo0Be49oK3ucYrFog" alt="First slide"></img>
              <div class="container">
                <div class="carousel-caption text-left">
                  <h1>TITULO PARA LLAMAR LA ATENCION</h1>
                  <p>Texto informativo sobre algo a destacar de la empresa o del trabajo que realiza, no funcionan los slides.</p>
                  <p><a class="btn btn-lg btn-primary" href="#" role="button">Funcionalidad</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
  
        <div class="container marketing">
  
          <div class="row">
            <div class="col-lg-4">
              <img class="rounded-circle" src="https://www.hude.pe/wp-content/themes/claue/assets/images/placeholder.png" alt="Generic placeholder image" width="140" height="140"></img>
              <h2>Producto destacado 1</h2>
              <p>Descripcion del producto o algunos datos importantes que podrian ser llamativo o interesante.</p>
              <p><a class="btn btn-secondary" href="#" role="button">Ver detalles &raquo;</a></p>
            </div>
            <div class="col-lg-4">
              <img class="rounded-circle" src="https://www.hude.pe/wp-content/themes/claue/assets/images/placeholder.png" alt="Generic placeholder image" width="140" height="140"></img>
              <h2>Producto destacado 2</h2>
              <p>Descripcion del producto o algunos datos importantes que podrian ser llamativo o interesante.</p>
              <p><a class="btn btn-secondary" href="#" role="button">Ver detalles &raquo;</a></p>
            </div>
            <div class="col-lg-4">
              <img class="rounded-circle" src="https://www.hude.pe/wp-content/themes/claue/assets/images/placeholder.png" alt="Generic placeholder image" width="140" height="140"></img>
              <h2>Producto destacado 3</h2>
              <p>Descripcion del producto o algunos datos importantes que podrian ser llamativo o interesante.</p>
              <p><a class="btn btn-secondary" href="#" role="button">Ver detalles &raquo;</a></p>
            </div>
          </div>
  
          <hr class="featurette-divider"></hr>
  
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Cuadro informativo 1</h2>
              <p class="lead">Estos cuadro pueden ser usados para mostrar productos o para informar sobre algun tema.</p>
            </div>
            <div class="col-md-5">
              <img class="featurette-image img-fluid mx-auto" src="https://3ts86y3dnwib6dqwj4dnm4tv-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/image-placeholder-500x500-4.jpg" alt="Generic placeholder image"></img>
            </div>
          </div>
  
          <hr class="featurette-divider"></hr>
  
          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading">Cuadro informativo 2</h2>
              <p class="lead">Estos cuadro pueden ser usados para mostrar productos o para informar sobre algun tema.</p>
            </div>
            <div class="col-md-5 order-md-1">
              <img class="featurette-image img-fluid mx-auto" src="https://3ts86y3dnwib6dqwj4dnm4tv-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/image-placeholder-500x500-4.jpg" alt="Generic placeholder image"></img>
            </div>
          </div>
  
          <hr class="featurette-divider"></hr>
  
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Cuadro informativo 3</h2>
              <p class="lead">Estos cuadro pueden ser usados para mostrar productos o para informar sobre algun tema.</p>
            </div>
            <div class="col-md-5">
              <img class="featurette-image img-fluid mx-auto" src="https://3ts86y3dnwib6dqwj4dnm4tv-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/image-placeholder-500x500-4.jpg" alt="Generic placeholder image"></img>
            </div>
          </div>
  
          <hr class="featurette-divider"></hr>
  
        
  
        </div>
  

      </main>
 
    )
    
  }
 
}
 
export default Inicio;