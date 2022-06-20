import WorldService from '../../services/WorldService';

const GET_COUNTRY = 'metrics/country/GET_COUNTRY';
const CLEAR = 'metrics/country/CLEAR';

async function getCountryCoords(dispatch, country) {
  const { data } = await WorldService.getCoordsByCountry(country);
  dispatch({ type: GET_COUNTRY, payload: data.results });
}

function removeCountryData(dispatch) {
  dispatch({ type: CLEAR });
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_COUNTRY:
      return action.payload;
    case CLEAR:
      return [];
    default:
      return state;
  }
}

export { getCountryCoords, removeCountryData };

// {
//   "documentation" : "https://opencagedata.com/api",
//   "licenses" : [
//      {
//         "name" : "see attribution guide",
//         "url" : "https://opencagedata.com/credits"
//      }
//   ],
//   "rate" : {
//      "limit" : 2500,
//      "remaining" : 2492,
//      "reset" : 1655769600
//   },
//   "results" : [
//      {
//         "bounds" : {
//            "northeast" : {
//               "lat" : 32.7186553,
//               "lng" : -86.493266
//            },
//            "southwest" : {
//               "lat" : 14.3886243,
//               "lng" : -118.599188
//            }
//         },
//         "components" : {
//            "ISO_3166-1_alpha-2" : "MX",
//            "ISO_3166-1_alpha-3" : "MEX",
//            "_category" : "place",
//            "_type" : "country",
//            "continent" : "North America",
//            "country" : "Mexico",
//            "country_code" : "mx"
//         },
//         "confidence" : 1,
//         "formatted" : "Mexico",
//         "geometry" : {
//            "lat" : 23.6585116,
//            "lng" : -102.0077097
//         }
//      }
//   ],
//   "status" : {
//      "code" : 200,
//      "message" : "OK"
//   },
//   "stay_informed" : {
//      "blog" : "https://blog.opencagedata.com",
//      "twitter" : "https://twitter.com/OpenCage"
//   },
//   "thanks" : "For using an OpenCage API",
//   "timestamp" : {
//      "created_http" : "Mon, 20 Jun 2022 19:59:01 GMT",
//      "created_unix" : 1655755141
//   },
//   "total_results" : 1
// }
