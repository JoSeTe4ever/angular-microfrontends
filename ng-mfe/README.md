# NgMfe

This project was generated using [Nx](https://nx.dev).

## Microfrontends links

https://blog.scottlogic.com/2021/02/17/probably-dont-need-microfrontends.html

https://nx.dev/l/a/guides/setup-mfe-with-angular

https://itnext.io/building-angular-micro-frontend-with-ngrx-state-sharing-and-nx-cli-7e9af10ebd03

https://blog.bitsrc.io/how-we-build-micro-front-ends-d3eeeac0acfc

How microservices could be discovered:

https://www.trendmicro.com/es_es/devops/21/h/micro-frontend-guide-technical-integrations.html
## run projects in parallel

npx nx run-many --parallel --target=serve --projects=login,dashboard

## personal notes:

for sharing services and so on, you must touch each one of the webpack.config file (shared resources) 
otherwise it will not work.

# angular-microfrontends
This is a concept after watching the JS international conference  Micro-Frontends with Module Federation: Beyond the Basics.

ng-mfe is an application with two micros: Dashboard and logging, using module federation and sharing state through a shared service (see webpackconfig of each one of the microfronts)
