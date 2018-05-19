Para poner en marcha el contador con eventos: 

1) Instalar truffle -> npm install –g truffle
2) Instalar ganache -> npm install ganache-cli
3) Clonar repositorio-> git clone https://github.com/SofiaVU/CounterExample/tree/master/CounterExample
4) En terminal: lanzar ganache -> ganache-cli -p 7545
5) En terminal: compilar y desplegar smart contract:
    5.1) truffle compile
    5.2) truffle migrate --network development
6) En terminal: Lanzar servidor next -> npm run dev
7) Acceder a traves de localhost:3000
