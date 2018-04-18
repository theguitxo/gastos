import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "orderby",
	pure: false
})
export class OrderByPipe implements PipeTransform {

	transform(array: Array<any>, valores: string, direccion: string ): Array<any> {

    let cambiador = direccion == 'ASC' ? 1 : -1;

		array.sort((a: any, b: any) => {

      	if (a[valores] < b[valores]) {
          return -1 * cambiador;
        } else if (a[valores] > b[valores]) {
          return 1 * cambiador;
        } else {
          return 0;
        }

    });

    return array;

  }

}
