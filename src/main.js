import { dependencies } from './dependencies.js';
import * as feature0 from './app/01-update-scene-background.js';
import * as feature1 from './app/02-get-active-image.js';
import * as feature2 from './app/03-render-images-list.js';
import * as feature3 from './app/04-build-heart-texture.js';
import * as feature4 from './app/05-build-texture.js';
import * as feature5 from './app/06-update-printable-label.js';
import * as feature6 from './app/07-reset-active-image.js';
import * as feature7 from './app/08-apply-export-pose.js';
import * as feature8 from './app/09-run-export-mug-views.js';
import * as feature9 from './app/10-export-mp4.js';
import * as feature10 from './app/11-export-mp4-compat.js';
import * as feature11 from './app/12-image-local-corners.js';
import * as feature12 from './app/13-get-intersection.js';
import * as feature13 from './app/14-resize.js';
import * as feature14 from './app/15-capture-submission-png.js';
import * as feature15 from './app/16-update-client-guide.js';

const app = { ...dependencies };
const features = [
  feature0,
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  feature6,
  feature7,
  feature8,
  feature9,
  feature10,
  feature11,
  feature12,
  feature13,
  feature14,
  feature15
];

for (const feature of features) feature.register(app);
for (const feature of features) feature.initialize(app);
