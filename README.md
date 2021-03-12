# Playground Helix Serverless

<p align="center"><img src="https://github.com/contrawork/graphql-helix/raw/master/logo.svg" width="400"></p>

> This project was generated using [Nx](https://nx.dev).

## Development

- Clone the repo

```bash
$ git clone https://github.com/pauloedurezende/playground-helix-serverless.git
```

- Install dependencies

```bash
$ yarn install
```

## Scripts

| Action                                                        | Usage (yarn)                          |
| ------------------------------------------------------------- | ------------------------------------- |
| Start development mode                                        | `yarn nx serve <application>`         |
| Build project                                                 | `yarn nx build <application> --prod`  |
| Running unit tests                                            | `yarn nx test <application>`          |
| Running unit tests on applications affected by a change       | `yarn nx affected:test <application>` |
| Running end-to-end tests                                      | `yarn nx e2e <application>`           |
| Running end-to-end tests on applications affected by a change | `yarn nx affected:e2e <application>`  |
| Dependencies graph                                            | `yarn nx dep-graph`                   |

Visit the [Nx Documentation](https://nx.dev) to learn more.

## Deploy

- [Install the Serverless Framework](https://www.serverless.com/framework/docs/providers/aws/guide/installation/)

- [Setup AWS](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/)

- Select a server and deploy

```bash
$ cd apps/<application>
$ serverless deploy
```
