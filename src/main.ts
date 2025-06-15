import { bootstrapApplication } from '@angular/platform-browser';
import { ConsolidatedDataComponent } from './app/consolidated-data/consolidated-data';
import { appConfig } from './app/app.config';

bootstrapApplication(ConsolidatedDataComponent, appConfig).catch((err) =>
  console.error(err)
);
