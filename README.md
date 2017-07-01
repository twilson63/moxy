## moxy

Movie Search Proxy

## Usage

```
fetch(`https://movie-search.jrs.camp?q=u2`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(res => res.json())
  .catch(err => console.log(err))
```

## Token

```
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJNb3ZpZSBTZWFyY2giLCJpYXQiOjE0OTg5MDkwMDYsImV4cCI6MTU5MzYwMzQwNiwiYXVkIjoibW92aWUtc2VhcmNoLmpycy5jYW1wIiwic3ViIjoibW92aWUtc2VhcmNoIn0.-U--gAcHA3rmbVIXYN-3fnhC37FuQa4KrXpmZG3D0G8
```
