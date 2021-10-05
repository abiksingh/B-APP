# Getting Started

Make sure you have read all the [acceptance criteria](https://boxplot.notion.site/Artefacts-for-FE-test-1ed95b4e67254cfd96cccc508a33664f).
Once you are ready to start working, create a branch (choose whatever branch name you feel is suitable) and implement
all the necessary features there. When you feel like you are ready to show the solution to us, simply make a pull request.

`eslint` and `prettier` were added to this project, so make sure you have configured your IDE to support them.
You can always run `npm run lint` to check for linting issues.

Adding tests is optional.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

It will also start a `json-server` API on the port 4000.\
Open [http://localhost:4000/albums](http://localhost:4000/albums) to access the albums endpoint.

### `npm test`

Runs the tests (all the `*.test.tsx` files), `eslint` with prettier and the typescript compiler to check for errors.
This will also be run when submitting the pull request on our CI.

## API

Extensive documentation about `json-server` api can be found on their [official GitHub page](https://github.com/typicode/json-server#table-of-contents).

Api will always respond with MAX 10 items in the list.

### Examples

#### Fetch albums

```bash
curl "http://localhost:4000/albums"
```

#### Paginate through albums

```bash
curl "http://localhost:4000/albums?_page=2"
```

#### Limit response

Limit can't be larger than 10.

```bash
curl "http://localhost:4000/albums?_limit=2"
```

#### Querying (full text search)

```bash
curl "http://localhost:4000/albums?q=floyd"
```
