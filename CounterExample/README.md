Para poner en marcha el contador con eventos:

Instalar truffle -> npm install –g truffle
Instalar ganache -> npm install ganache-cli
Clonar repositorio-> git clone https://github.com/SofiaVU/CounterExample/tree/master/CounterExample
En terminal: lanzar ganache -> ganache-cli -p 7545
En terminal: compilar y desplegar smart contract: 
  5.1) truffle compile 
  5.2) truffle migrate --network development
En terminal: Lanzar servidor next -> npm run dev
Acceder a traves de localhost:3000
