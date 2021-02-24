import { SelectedCity } from './../../core/types/selected-city';

export function addCity(selectedCities: SelectedCity[], index: number): SelectedCity[] {

  if (!isUpdateCity(selectedCities, index) && index < 10) {
    selectedCities.push(new SelectedCity())
  }

  return selectedCities
}

function isUpdateCity(selectedCities: SelectedCity[], index: number): boolean {
  return (selectedCities.length - 1) !== index
}
