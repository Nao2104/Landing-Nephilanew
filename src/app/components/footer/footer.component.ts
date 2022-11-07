import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  face = "assets/img/REDES_SOCIALES/facebook.png"
  insta= "assets/img/REDES_SOCIALES/instagram.png"
  what = "assets/img/REDES_SOCIALES/whatsapp.png"
  correo= "assets/img/REDES_SOCIALES/correo-electronico.png"
  telefono= "assets/img/REDES_SOCIALES/telefono-movil.png"

  constructor() { }

  ngOnInit(): void {
  }

}
