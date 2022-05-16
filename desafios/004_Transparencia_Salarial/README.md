Os dados disponibilizados no ficheiro `pwit_transparencia_salarial.csv` são do projeto de [Transparência Salarial da Portuguese Women in Tech](https://docs.google.com/spreadsheets/d/10JCXthEjLKCnudhFo3RfsWCx2iHcPgkuqvs-Yw7zfq4/edit#gid=675151327) e foram processados pela DSSG PT.

| Nome da coluna        | Significado           | Possíveis valores  |
| ------------- |:-------------:| -----:|
| idade | Faixa etária | Categórico (exemplo: 18-24, 25-34) |
| genero | Género | Categórico (exemplo: homem, mulher, outro) |
| local | Localização do escritório | Texto (exemplo: Lisboa) |
| titulo | Nome da função que desempenho | Texto (exemplo: UX/UI Designer) |
| anos_de_experiencia | Anos de experiência relevantes para a função actual | Categórico (exemplo: <15 anos de experiência, Sem experiência) |
| tamanho_da_empresa | Número de pessoas que trabalham na empresa | Categórico (exemplo: 100 - 200 pessoas) |
| salario_bruto_mensal | Salário bruto mensal | Texto |
| outros_beneficios | Outros benefícios oferecidos pela empresa | "Texto (exemplo: Health Insurance, Gym membership	)" |
| salario_processado | Salário bruto mensal transformado em valor numérico e, nos casos em que se aplica, convertido em euros | Inteiro >= 0 |
| bins_salario | Categorias salariais | Categórico (exemplo: menos de 2000 euros) |
