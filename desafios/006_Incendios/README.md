Os dados disponibilizados no ficheiro `area_ardida.csv` são do miniprojeto  [Mapa de Incêndios Florestais: as últimas décadas](https://github.com/dssg-pt/mp-incendios), organizado pela DSSG PT. Mais detalhes sobre a extração e processamento do dataset nesse repositório.

| Nome da coluna        | Significado           | Possíveis valores  |
| ------------- |:-------------:| -----:|
| Dicofre | Indicador oficial das freguesias em Portugal - correspondente à posição (latitude, longitude) | Inteiro |
| Freguesia | Freguesia correspondente à posição (latitude, longitude) | Float |
| Distrito | Distrito correspondente à posição (latitude, longitude) | Texto (exemplo: SANTARÉM) |
| Concelho | Concelho correspondente à posição (latitude, longitude) |  Texto (exemplo: Abrantes) |
| month | Mês correspondente à área ardida | Categórico (1-12) |
| year | Ano correspondente à área ardida | Inteiro (exemplo: 2000) |
| sum | Total de área ardida, em hectares, em (mês, ano, latitude, longitude) | Float |
| latitude | Latitude do ponto ardido - centróide do concelho (do ICNF) | Float |
| longitude | Longitude do ponto ardido - centróide do concelho (do ICNF) | Float |
