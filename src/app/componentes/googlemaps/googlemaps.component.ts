import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild, Inject  } from '@angular/core';
import { GooglemapsService } from '../../servicios/googlemaps.service';
import { ModalController } from '@ionic/angular';
import { DOCUMENT } from '@angular/common';

// import { Plugins } from '@capacitor/core';
// const {Geolocation} = Plugins;

import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google: any;

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.scss'],
})
export class GooglemapsComponent implements OnInit {

  // coordenadas cuenca
  @Input() posicion = {
    lat: -3.480900568132746,
    lng: -80.23564209876459
  };

  label = {
      titulo:'Ubicación actual',
      subtitulo: 'Seleccione la ubicación del estudiante'
  } 

  map: any;
  marker: any;
  infowindow: any;
  positionSet: any

  @ViewChild('map') divMap: ElementRef;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document,
    private googlemapsService: GooglemapsService,
    public modalController: ModalController,
    private geoLocation: Geolocation
  ) { }

  ngOnInit() {
    this.init();
  }

  async init() {
    this.googlemapsService.init(this.renderer, this.document).then( () => {
          this.initMap();
    }).catch( (err) => {    
          console.log(err);
    });
  };


  initMap() {
    const position = this.posicion;
    let latLng = new google.maps.LatLng(position.lat, position.lng);
    let mapOptions = {
          center: latLng,
          zoom: 15,
          disableDefaultUI: true,
          clickableIcons: false,
    };
    this.map = new google.maps.Map(this.divMap.nativeElement, mapOptions);
    this.marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          draggable: false,
    });
    this.clickHandleEvent();
    this.infowindow = new google.maps.InfoWindow();
    this.addMarker(position);
    this.setInfoWindow(this.marker, this.label.titulo, this.label.subtitulo);
  }

  clickHandleEvent() {
    this.map.addListener('click', (event: any) => {
          const position = {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
          };
          this.addMarker(position);
    });
  }

  addMarker(position: any): void {
    let latLng = new google.maps.LatLng(position.lat, position.lng);
    this.marker.setPosition(latLng);
    this.map.panTo(position);
    this.positionSet = position;
  }

  setInfoWindow(marker: any, titulo: string, subtitulo: string) {
    const contentString  =  '<div id="contentInsideMap">' +
                            '<div>' +
                            '</div>' +
                            '<p style="font-weight: bold; margin-bottom: 5px;">' + titulo + '</p>' +
                            '<div id="bodyContent">' +
                            '<p class"normal m-0">'
                            + subtitulo + '</p>' +
                            '</div>' +
                            '</div>';
    this.infowindow.setContent(contentString);
    this.infowindow.open(this.map, marker);
  }

  async mylocation() {
    this.geoLocation.getCurrentPosition().then((res) => {
          const position = {
                lat: res.coords.latitude,
                lng: res.coords.longitude,
          }
          this.addMarker(position);
    });
  }

    aceptar() {
      this.modalController.dismiss({pos: this.positionSet})
  }
}
