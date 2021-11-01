# MfApp

For creating the shell (host) and the consumer (gallery)

npx nx g @nrwl/angular:app shell --mfe --mfeType=host --port=3000 --routing=true
npx nx g @nrwl/angular:app gallery --mfe --mfeType=remote --port=5000 --host=shell --routing=true

To the remote app Nx automatically adds the remoteentryModule config on the app.module.ts
## run projects in parallel

npx nx run-many --parallel --target=serve --projects=shell,gallery