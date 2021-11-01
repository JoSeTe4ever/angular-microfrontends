# NgMfe

This project was generated using [Nx](https://nx.dev).

## Microfrontends links

https://blog.scottlogic.com/2021/02/17/probably-dont-need-microfrontends.html

https://nx.dev/l/a/guides/setup-mfe-with-angular

https://itnext.io/building-angular-micro-frontend-with-ngrx-state-sharing-and-nx-cli-7e9af10ebd03

## run projects in parallel

npx nx run-many --parallel --target=serve --projects=login,dashboard

## personal notes:

for sharing services and so on, you must touch each one of the webpack.config file (shared resources) 
otherwise it will not work.

