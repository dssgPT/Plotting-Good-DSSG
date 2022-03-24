Os dados disponibilizados no ficheiro `snirh_clean.csv` foram obtidos através do [SNIRH](https://snirh.apambiente.pt/). Os detalhes sobre o processamento dos dados estão no ficheiro `/processamento/datawrangling.ipynb`


# 📔 Dicionário dos dados

| Nome da coluna        | Significado           | Possíveis valores  |
| ------------- |:-------------:| -----:|
| `nome_infraestrutura` | O nome da bacia ou albufeira à qual correspondem os dados. | Texto |
| `resumo_infraestrutura` | A quantidade de água armazenada na infraestrutura correspondente. | Percentagem [0,100] ou Inteiro >= 1 |
| `data` | O mês e o ano a que correspondem os valores apresentados. O dia é incluído como elemento "dummy" para permitir ter uma data completa. | YYYY-MM-DD |
| `tipo_de_infraestrutura` | O tipo de infraestrutura. | bacia ou albufeira. |
| `medida` | A medida para resumir a capacidade de armazenamento das albufeiras. Ou "metro_cubico", ou "percentagem". No caso dos metros cúbicos, trata-se de 1000000 (10^6) metros cúbicos. | Texto |
