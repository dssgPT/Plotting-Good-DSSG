Os dados disponibilizados no ficheiro `partos_hospitais_publicos.csv` são disponibilizados no [Portal da Transparência do SNS](https://transparencia.sns.gov.pt/explore/dataset/partos-e-cesarianas/table/?disjunctive.regiao&disjunctive.instituicao&sort=tempo) e foram descarregados a 30 de maio de 2022 e processados pela DSSG PT.

Durante o processamento, encontrámos várias incoerências nos dados:

- Números reportados não fazem sentido
  Para Junho de 2018, o Centro Hospitalar de Setúbal reporta 97 cesarianas, mas o valor é inferior ao mês anterior (os números mensais são valores acumulados).
  Para Julho de 2014, o Centro Hospitalar Médio Tejo reporta 230 cesarianas, quando no mês anterior tinha reportado 106 e no seguinte reporta 152.

- Não há números reportados
  A Unidade Local de Saúde de Matosinhos não reporta dados em Outubro de 2021. Os valores de Novembro parecem ter em conta os números de Outubro.
  O Centro Hospitalar Tâmega e Sousa, EPE não reporta dados em Outubro de 2017. Os valores de Novembro parecem ter em conta os números de Outubro.
  O Hospital de Santa Maria Maior só tem uma entrada, para Setembro de 2018, e reporta 0 partos e cesarianas.
  O Hospital Fernando Fonseca, não reporta dados em Setembro de 2016. Os valores de Outubro parecem ter em conta os números do mês anterior.
  A Unidade Local de Saúde da Guarda, EPE, não reporta dados em Junho de 2015. Os valores de Julho parecem ter em conta os números do mês anterior.

| Nome da coluna         | Significado                                                                                                                                    | Possíveis valores                                                  |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| período                | O período de referência dos dados (o ano e o mês)                                                                                              | Data(YYYY-MM)                                                      |
| região                 | A região de saúde a que pertence o hospital                                                                                                    | Texto (examplo: Região de Saúde do Centro)                         |
| instituição            | O hospital a que se referem os dados                                                                                                           | Texto (exemplo: Centro Hospitalar e Universitário de Coimbra, EPE) |
| localização_geográfica | As coordenadas do hospital                                                                                                                     | Coordenadas (exemplo: 40.2191523,-8.4098211)                       |
| total_partos           | O total de partos no período de referência. Os valores apresentados mensalmente são acumulados. Em Dezembro, os valores são o total anual.     | Inteiro (>0)                                                       |
| total_cesarianas       | O total de cesarianas no período de referência. Os valores apresentados mensalmente são acumulados. Em Dezembro, os valores são o total anual. | Inteiro (>0)                                                       |
| ano                    | O ano de referência dos dados                                                                                                                  | Inteiro (>=2013 & <=2022)                                          |
| mês                    | O mês de referência dos dados                                                                                                                  | Inteiro (>=1 & <=12)                                               |
| partos_mês             | O total de partos mensal no período de referência                                                                                              | Inteiro (>0)                                                       |
| cesarianas_mês         | O total de cesarianas mensal no período de referência                                                                                          | Inteiro (>0)                                                       |
| percent_cesarianas_mês | A percentagem de cesarianas por mês                                                                                                            | Percentagem                                                        |
| percent_cesarianas_ano | A percentagem de cesarianas por ano. Só aplicável nos meses de Dezembro.                                                                       | Percentagem                                                        |
