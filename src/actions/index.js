// TODO: add and export your own actions
import cities from '../cities';

export function setCities() {
    // TODO: Api call! For now, simulate a DB
    return {
        type: 'SET_CITIES',
        payload: cities
    }
}

export function selectCity(city) {
    // TODO: Api call! For now, simulate a DB
    return {
        type: 'CITY_SELECTED',
        payload: city
    }
}
