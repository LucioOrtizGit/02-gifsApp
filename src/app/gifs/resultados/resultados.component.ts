import { Component} from '@angular/core';
import { GifsModule } from '../gifs.module';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent  {

  get resultados(){
    return this.gifsService.resultados;
  }

  constructor(private gifsService:GifsService) { }


}
