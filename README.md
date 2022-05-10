# Zodiac Signs api

## api url - `https://zodiac-signs-api.herokuapp.com/`

## How to use -
1. To get all the zodiac signs data at once make a `get` requst on the `/signs` route.

2. To get data for only one zodiac sign make a request make a `get` request on the `/signs/<sign_name>` route. For example
```
GET /signs/tautus
```

3. To get data using birth day and month make a `get` request on the `/date/<date>` route. For example
```
GET /date/2001-04-23T12:00:00.000Z
```
This will return the data for Taurus sign.
