import React from "react";
import { Row } from "react-bootstrap";
import "./lista_terrenos.css";

class Lista_terrenos extends React.Component {
    render(){
        return (
        <div class="container py-5" id="products">
            <div class="row text-center mb-5">              
                <div class="col-lg-7 mx-auto">
                    <h1 class="display-4">Product List</h1> {/*AQUI IRIA URBANO O RURAL*/}
                </div>
            </div>
            <div class="row">                           {/*AQUI IRIA UN CICLO DE REPETICION CREANDO PRODUCTOS*/}
                <div class="col-lg-12 mx-auto">
                    <ul class="list-group shadow">
                        <li class="list-group-item">
                            <div class="media align-items-lg-center flex-column flex-lg-row p-12">
                                <div class="media-body order-2 order-lg-1">
                                    <img id="product_img" src="https://www.aidforwomen.org/wp-content/uploads/2020/10/image-placeholder-500x500-1.jpg" alt="Generic placeholder image"class="ml-lg-3 order-1 order-lg-2"></img>
                                </div>
                                <div class="media-body order-2 order-lg-1" id="text-products">
                                    <h5 class="mt-0 font-weight-bold mb-2">Terreno 1</h5>
                                    <p class="font-italic text-muted mb-0 small">

                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed elit non dui tincidunt eleifend. Nullam vel ex sed enim bibendum ornare vitae ac metus. Phasellus porta, ipsum quis pulvinar viverra, purus augue tempor lacus, vel convallis massa turpis aliquet erat. Praesent interdum congue pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ultrices eleifend. Pellentesque quis volutpat purus, aliquet ornare eros. Integer eget lacus sit amet lacus mollis luctus vel sit amet sem. Nam id leo mauris. Donec aliquet malesuada libero, ut efficitur libero cursus non. Cras erat urna, luctus laoreet vulputate at, porttitor a tortor. Aenean semper a risus vel ultrices. Nulla suscipit turpis ante, et malesuada nulla elementum eget. Vestibulum elementum, ante sed malesuada tincidunt, nibh purus mattis lorem, non cursus mi sapien eu risus. Maecenas eu lectus non metus dignissim fringilla et non neque.

                                            Maecenas id metus in odio rutrum consectetur sed quis lorem. Ut dapibus tempus justo ac aliquam. Curabitur pellentesque diam non velit facilisis, eget varius tortor scelerisque. Nam mi tortor, blandit ac quam quis, dignissim sollicitudin dolor. Morbi ex libero, sollicitudin ac neque ut, feugiat euismod diam. Aenean mollis luctus sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur. </p>
                                    <div class="d-flex align-items-center justify-content-between mt-1">
                                        <h6 class="font-weight-bold my-2">$100000</h6>
                                        <ul class="list-inline small">
                                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa fa-star-o text-gray"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> 
                        </li> 
                        <li class="list-group-item">
                            <div class="media align-items-lg-center flex-column flex-lg-row p-12">
                                <div class="media-body order-2 order-lg-1" id="text-products2">
                                    <h5 class="mt-0 font-weight-bold mb-2">Terreno 2</h5>
                                    <p class="font-italic text-muted mb-0 small">

                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed elit non dui tincidunt eleifend. Nullam vel ex sed enim bibendum ornare vitae ac metus. Phasellus porta, ipsum quis pulvinar viverra, purus augue tempor lacus, vel convallis massa turpis aliquet erat. Praesent interdum congue pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ultrices eleifend. Pellentesque quis volutpat purus, aliquet ornare eros. Integer eget lacus sit amet lacus mollis luctus vel sit amet sem. Nam id leo mauris. Donec aliquet malesuada libero, ut efficitur libero cursus non. Cras erat urna, luctus laoreet vulputate at, porttitor a tortor. Aenean semper a risus vel ultrices. Nulla suscipit turpis ante, et malesuada nulla elementum eget. Vestibulum elementum, ante sed malesuada tincidunt, nibh purus mattis lorem, non cursus mi sapien eu risus. Maecenas eu lectus non metus dignissim fringilla et non neque.

                                            Maecenas id metus in odio rutrum consectetur sed quis lorem. Ut dapibus tempus justo ac aliquam. Curabitur pellentesque diam non velit facilisis, eget varius tortor scelerisque. Nam mi tortor, blandit ac quam quis, dignissim sollicitudin dolor. Morbi ex libero, sollicitudin ac neque ut, feugiat euismod diam. Aenean mollis luctus sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur. </p>
                                    <div class="d-flex align-items-center justify-content-between mt-1">
                                        <h6 class="font-weight-bold my-2">$100000</h6>
                                        <ul class="list-inline small">
                                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa fa-star-o text-gray"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="order-2 order-lg-1">
                                    <img id="product_img" src="https://www.aidforwomen.org/wp-content/uploads/2020/10/image-placeholder-500x500-1.jpg" alt="Generic placeholder image"class="ml-lg-3 order-1 order-lg-2"></img>
                                </div>
                            </div> 
                        </li> 
                        <li class="list-group-item">
                            <div class="media align-items-lg-center flex-column flex-lg-row p-12">
                                <div class="media-body order-2 order-lg-1">
                                    <img id="product_img" src="https://www.aidforwomen.org/wp-content/uploads/2020/10/image-placeholder-500x500-1.jpg" alt="Generic placeholder image"class="ml-lg-3 order-1 order-lg-2"></img>
                                </div>
                                <div class="media-body order-2 order-lg-1" id="text-products">
                                    <h5 class="mt-0 font-weight-bold mb-2">Terreno 3</h5>
                                    <p class="font-italic text-muted mb-0 small">

                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed elit non dui tincidunt eleifend. Nullam vel ex sed enim bibendum ornare vitae ac metus. Phasellus porta, ipsum quis pulvinar viverra, purus augue tempor lacus, vel convallis massa turpis aliquet erat. Praesent interdum congue pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ultrices eleifend. Pellentesque quis volutpat purus, aliquet ornare eros. Integer eget lacus sit amet lacus mollis luctus vel sit amet sem. Nam id leo mauris. Donec aliquet malesuada libero, ut efficitur libero cursus non. Cras erat urna, luctus laoreet vulputate at, porttitor a tortor. Aenean semper a risus vel ultrices. Nulla suscipit turpis ante, et malesuada nulla elementum eget. Vestibulum elementum, ante sed malesuada tincidunt, nibh purus mattis lorem, non cursus mi sapien eu risus. Maecenas eu lectus non metus dignissim fringilla et non neque.

                                            Maecenas id metus in odio rutrum consectetur sed quis lorem. Ut dapibus tempus justo ac aliquam. Curabitur pellentesque diam non velit facilisis, eget varius tortor scelerisque. Nam mi tortor, blandit ac quam quis, dignissim sollicitudin dolor. Morbi ex libero, sollicitudin ac neque ut, feugiat euismod diam. Aenean mollis luctus sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur. </p>
                                    <div class="d-flex align-items-center justify-content-between mt-1">
                                        <h6 class="font-weight-bold my-2">$100000</h6>
                                        <ul class="list-inline small">
                                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa fa-star-o text-gray"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> 
                        </li> 
                        <li class="list-group-item">
                            <div class="media align-items-lg-center flex-column flex-lg-row p-12">
                                <div class="media-body order-2 order-lg-1" id="text-products2">
                                    <h5 class="mt-0 font-weight-bold mb-2">Terreno 4</h5>
                                    <p class="font-italic text-muted mb-0 small">

                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed elit non dui tincidunt eleifend. Nullam vel ex sed enim bibendum ornare vitae ac metus. Phasellus porta, ipsum quis pulvinar viverra, purus augue tempor lacus, vel convallis massa turpis aliquet erat. Praesent interdum congue pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ultrices eleifend. Pellentesque quis volutpat purus, aliquet ornare eros. Integer eget lacus sit amet lacus mollis luctus vel sit amet sem. Nam id leo mauris. Donec aliquet malesuada libero, ut efficitur libero cursus non. Cras erat urna, luctus laoreet vulputate at, porttitor a tortor. Aenean semper a risus vel ultrices. Nulla suscipit turpis ante, et malesuada nulla elementum eget. Vestibulum elementum, ante sed malesuada tincidunt, nibh purus mattis lorem, non cursus mi sapien eu risus. Maecenas eu lectus non metus dignissim fringilla et non neque.

                                            Maecenas id metus in odio rutrum consectetur sed quis lorem. Ut dapibus tempus justo ac aliquam. Curabitur pellentesque diam non velit facilisis, eget varius tortor scelerisque. Nam mi tortor, blandit ac quam quis, dignissim sollicitudin dolor. Morbi ex libero, sollicitudin ac neque ut, feugiat euismod diam. Aenean mollis luctus sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur. </p>
                                    <div class="d-flex align-items-center justify-content-between mt-1">
                                        <h6 class="font-weight-bold my-2">$100000</h6>
                                        <ul class="list-inline small">
                                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                            <li class="list-inline-item m-0"><i class="fa fa-star-o text-gray"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="order-2 order-lg-1">
                                    <img id="product_img" src="https://www.aidforwomen.org/wp-content/uploads/2020/10/image-placeholder-500x500-1.jpg" alt="Generic placeholder image"class="ml-lg-3 order-1 order-lg-2"></img>
                                </div>
                            </div> 
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}
export default Lista_terrenos;