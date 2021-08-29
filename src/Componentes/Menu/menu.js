import React from "react";
import "./menu.css";

class Menu extends React.Component {
 
    render() {
   
        return (
			
		<nav class="navbar navbar-expand-md navbar-light bg-light">
			<a href="#" class="navbar-brand">
				<img src="https://i.pinimg.com/originals/7d/1d/81/7d1d8104d1460bb020561f06a6522bad.png" height="28" alt="CoolBrand"></img>
			</a>
			<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarCollapse">
				<div class="navbar-nav">
					<a href="https://www.facebook.com" class="nav-item nav-link active">NOMBRE EMPRESA</a>
				</div>
				<div class="navbar-nav ml-auto">
					<a href="#" class="nav-item nav-link">FUNCIONALIDAD</a>
				</div>
			</div>
		</nav>
            
        )
      
    }
   
  }
   
  export default Menu;