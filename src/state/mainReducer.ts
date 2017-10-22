import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import { Reducer$ } from './types';
import { reducer$ as listReducer$ } from '../List/state';
import { reducer$ as detailReducer$ } from '../Detail/state';

const mainReducer$: Reducer$ = Observable.merge(listReducer$, detailReducer$);

export default mainReducer$;
