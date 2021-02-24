import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureSymbol'
})
export class TemperatureSymbolPipe implements PipeTransform {

  transform(value: string,): string {
    let tempSymbol = 'K'
    switch (value) {
      case 'imperial':
        tempSymbol = 'F'
        break;
      case 'metric':
        tempSymbol = 'C'
        break;

      default:
        break;
    }

    return tempSymbol
  }

}
