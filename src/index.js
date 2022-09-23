import ("./index.scss");

import { drawGalleriItem } from './item';
import items from './items';

const galleryRootElement = document.getElementById('galleryRoot');
items.map(item => galleryRootElement.appendChild(drawGalleriItem(item)))