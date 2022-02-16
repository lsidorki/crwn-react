import { takeEvery } from 'redux-saga'
import ShopActionTypes from './shop.types';

export function* fetchCollectionsStartAsync() {
    yield console.log('I am fired');
}

export function* fetchCollectionsStart() {
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsStartAsync
    )
}