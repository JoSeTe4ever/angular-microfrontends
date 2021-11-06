# MfApp

For creating the shell (host) and the consumer (gallery)

npx nx g @nrwl/angular:app shell --mfe --mfeType=host --port=3000 --routing=true
npx nx g @nrwl/angular:app gallery --mfe --mfeType=remote --port=5000 --host=shell --routing=true

To the remote app Nx automatically adds the remoteentryModule config on the app.module.ts
## run projects in parallel

npx nx run-many --parallel --target=serve --projects=shell,gallery
npm run start-all  // this is a script that executes everything

## source urls 

https://itnext.io/building-angular-micro-frontend-with-ngrx-state-sharing-and-nx-cli-7e9af10ebd03#4594
https://www.reddit.com/r/catswithjobs/.json

## sharing data

for sharing data in all the apps webconfig files.

sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
    '@mf-app/shared/data-store'
]);

## pieces of thought 

each microfrontend should have its own webpack.config.js file. The host/shell has this remotes: array, but it can be 
loaded dinamically which makes more sense. Using the federation-runtime pluggin by Manfred.

## todo 

* Set the fallback strategy (like lazy-loading-promise) when a microfrotend could not be properly loaded.
* Load the microfrontend from the backend microservice 
* 