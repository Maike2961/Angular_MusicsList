import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Musica } from '../../../interface/interface';
import { ServiceService } from '../../services/service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, FormsModule, BtnComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent implements OnInit {

  musica: Musica[] = []

  constructor(private service: ServiceService) { }

  id: string = ''
  author: string = ''
  musicas: string = ''
  salvarEditar: boolean = true
  mostrarForm: boolean = false


  OnSubmit() {
    if (!this.author || !this.musicas) {
      alert("Adicione um autor e uma musica")
      return;
    }
    if (this.id) {
      this.salvarEditar = false
      this.PutData({ id: this.id, author: this.author, text: this.musicas })
    } else {
      this.AddNovaMusica({ author: this.author, text: this.musicas })
    }
    this.id = ''
    this.author = ''
    this.musicas = ''
    this.salvarEditar = true
  }
  PreencherForm(musica: Musica) {
    this.id = musica.id!.toString()
    this.author = musica.author
    this.musicas = musica.text
    this.salvarEditar = false
    return;
  }

  VisualizarForm(value: boolean) {
    this.mostrarForm = value
  }


  ngOnInit() {
    this.service.getData().subscribe((data) => {
      this.musica = data
    })
  }

  AddNovaMusica(musica: Musica) {
    this.service.postData(musica).subscribe((music) => {
      this.musica.push(music)
    })
  }

  PutData(musica: Musica) {
    this.service.putData(musica).subscribe(_ =>
      this.ngOnInit()
    )
  }

  DeleteMusica(musica: Musica) {
    this.service.deleteData(musica).subscribe(()=>{
      this.musica = this.musica.filter((t)=> t.id !== musica.id)
    })
  }
}
