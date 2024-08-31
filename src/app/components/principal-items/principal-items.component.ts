import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Musica } from '../../../interface/interface';

@Component({
  selector: 'app-principal-items',
  standalone: true,
  imports: [],
  templateUrl: './principal-items.component.html',
  styleUrl: './principal-items.component.scss'
})
export class PrincipalItemsComponent {

  @Input() sons! : Musica

  @Output() Atualizar = new EventEmitter<Musica>()

  btnAtualizar(musica: Musica){
    this.Atualizar.emit(musica)
  }
}
