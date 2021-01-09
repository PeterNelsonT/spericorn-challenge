import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCountryDetails(action) {
  try {
    const response = yield axios.get(
      'https://gist.githubusercontent.com/ebaranov/41bf38fdb1a2cb19a781/raw/fb097a60427717b262d5058633590749f366bd80/gistfile1.json'
    );
    if (response?.data)
      yield put({
        type: 'COUNTRY_DETAILS_FETCH_COMPLETED',
        countries: response?.data?.countries,
      });
    else {
      yield put({ type: 'ERROR', message: response });
    }
  } catch (e) {
    yield put({ type: 'ERROR', message: e });
  }
}

function* saga() {
  yield takeLatest('COUNTRY_DETAILS', fetchCountryDetails);
}

export default saga;
