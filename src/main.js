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
import * as feature16 from './app/17-visual-library.js';
import * as feature17 from './app/18-app-menu.js';
import * as feature18 from './app/19-shop-catalog-2d.js';
import * as feature19 from './app/20-business-card-modal.js';
import * as feature20 from './app/21-catalog-categories.js';
import * as feature21 from './app/22-product-compatibility.js';
import * as feature22 from './app/23-catalog-subcategories.js';
import * as feature23 from './app/24-category-manager-modal.js';
import * as feature24 from './app/26-visual-edit-modal.js';
import * as feature25 from './app/27-client-order-modal.js';
import * as feature26 from './app/28-admin-submissions-modal.js';

const app = { ...dependencies };
if (typeof window !== 'undefined') window.app = app;
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
  feature15,
  feature16,
  feature17,
  feature18,
  feature19,
  feature20,
  feature21,
  feature22,
  feature23,
  feature24,
  feature25,
  feature26
];

for (const feature of features) feature.register(app);
for (const feature of features) feature.initialize(app);
