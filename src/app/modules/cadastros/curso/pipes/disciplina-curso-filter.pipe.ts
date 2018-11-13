import { Curso } from './../curso.model';
import { Disciplina } from './../../disciplina/disciplina.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'disciplinaCursoFilter',
  pure: false
})
export class DisciplinaCursoFilterPipe implements PipeTransform {

  transform(itens: Disciplina[], curso: Curso, filtroString: string): any {
    let disciplinas: Disciplina[] = [];

    itens.forEach((disciplina) => {
      let found = false;

      curso.semestres.forEach((semestre) => {
        semestre.disciplinas = semestre.disciplinas || [];

        let foundSemestre = semestre.disciplinas.filter((a) => a.id == disciplina.id).length > 0;
        if (foundSemestre) {
          found = true;
        }
      });

      if (!found) {
        if (filtroString) {
          if (disciplina.nome.toUpperCase().indexOf(filtroString.toUpperCase()) >= 0) {
            disciplinas.push(disciplina);
          }
        } else {
          disciplinas.push(disciplina);
        }

      }
    });

    return disciplinas;
  }

}
