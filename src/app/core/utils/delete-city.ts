import { SelectedCity } from './../../core/types/selected-city';
export function deleteCity(selectedCities: SelectedCity[], index: number): SelectedCity[] {

  if (index === 0) return selectedCities

  return selectedCities.filter((_, i) => i !== index)
}
