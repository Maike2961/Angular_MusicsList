import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-principal-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './principal-add.component.html',
  styleUrl: './principal-add.component.scss'
})
export class PrincipalAddComponent {
  mostrarForm: boolean = true
  author: string = ''
  musica: string =''

  @Output() AddMusica = new EventEmitter()

  OnSubmit(){
    if(!this.author || !this.musica){
      alert("Adicione um author e musica")
      return;
    }
    console.log(this.author, this.musica)

    const novaMusica= {
      author: this.author,
      text: this.musica
    }

    this.AddMusica.emit(novaMusica)

    this.author = ''
    this.musica = ''
  }
}
