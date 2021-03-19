## Tone Analyzer service from IBM Cloud

Small Node.js server that handles text POST request and returns the tone of the text 


## Getting started
```sh
npm install
npm run start
```

## Endpoints



| Method | Endpoint    | Description |
|--------|-------------|-------------|
| GET    | /autor    |   Returns a JSON with the name of the autor         |
| POST   | /toneAnalyzer |   Receives plain text to analyze, and returns a JSON with the text analyzed by tone