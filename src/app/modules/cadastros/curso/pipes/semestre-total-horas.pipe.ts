import { Semestre } from './../curso.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semestreTotalHoras',
  pure: false
})
export class SemestreTotalHorasPipe implements PipeTransform {

  transform(semestre: Semestre, args?: any): any {
    if (!semestre) {
      return 0;
    }

    let total = 0;

    semestre.disciplinas.forEach((d) => total += d.cargaHoraria);

    return total;
  }

}
