import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CitySelectComponent } from './components/city-select/city-select.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { GeneralWordsEffects } from './store/effects/weather.effect';
import { weatherReducer } from './store/reducers/weather.reducer';
import { MatListModule } from '@angular/material/list';
import { TemperatureSymbolPipe } from './pipes/temperature-symbol.pipe';
import { MatButtonModule } from '@angular/material/button'



@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
    CitySelectComponent,
    TemperatureSymbolPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    StoreModule.forRoot({ weather: weatherReducer }),
    EffectsModule.forRoot([GeneralWordsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
