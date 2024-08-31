import { Component, OnInit } from '@angular/core';
import { PrincipalItemsComponent } from '../principal-items/principal-items.component';
import { Musica } from '../../../interface/interface';
import { ServiceService } from '../../services/service.service';
import { CommonModule } from '@angular/common';
import { PrincipalAddComponent } from '../principal-add/principal-add.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [PrincipalItemsComponent, CommonModule, PrincipalAddComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent implements OnInit {
  
  musica: Musica[] = []

  constructor(private service: ServiceService){}

  ngOnInit(){
    this.service.getData().subscribe((data)=>{
      this.musica = data
      console.table(data)
    })
  }

  AddNovaMusica(musica: Musica){
    this.service.postData(musica).subscribe((music)=>{
      this.musica.push(music)
    })
  }
}
