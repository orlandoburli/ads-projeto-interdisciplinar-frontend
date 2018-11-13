import { Pipe, PipeTransform } from '@angular/core';
import { Curso } from '../curso.model';

@Pipe({
  name: 'cursoTotalHoras',
  pure: false
})
export class CursoTotalHorasPipe implements PipeTransform {

  transform(curso: Curso, args?: any): any {
    let total = 0;

    if (curso) {
      curso
        .semestres
        .forEach((semestre) => semestre
          .disciplinas
          .forEach((disciplina) => total += disciplina.cargaHoraria));
    }

    return total;
  }

}
