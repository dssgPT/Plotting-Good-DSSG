Os dados disponibilizados no ficheiro `ruas_abril.geojson` são do Open Street Map (OSM) e foram obtidos através do [Geofabrik](https://download.geofabrik.de/europe/portugal.html). Os detalhes sobre o processamento dos dados estão no ficheiro `/processamento/processamento_ruas_abril.ipynb`

| Nome da coluna         | Significado                                                                    | Possíveis valores                                                    |     
| ---------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------- | 
| osm_id                 | ID do segmento da rua extraído do OpenStreetMaps.                              | Inteiro >=0                                                          |     |     |
| rua                    | Nome da rua, de acordo com o OpenStreetMaps                                    | Texto (Exemplo: Avenida da Liberdade)                                |     |     |
| geometry               | Polígono das coordenadas da rua, do tipo LINESTRING (Shapefile)                | LINESTRING                                                           |     |     |
| concelho               | Nome do concelho, de acordo com o join espacial da coluna "geometry"           | Texto (exemplo: Marinha Grande)                                      |     |     |
| Freguesia              | Nome da freguesia, de acordo com o join espacial da coluna "geometry"          | Texto (exemplo: Marinha Grande)                                      |     |     |
| rua_freguesia_concelho | Concatenação das colunas rua, freguesia e concelho, para fins de representação | Texto (exemplo: Avenida da Liberdade_Marinha Grande_Marinha Grande ) |     |     |
| unique_index           | Índice único derivado dos triplos rua, freguesia, e concelho                   | Inteiro >= 0                                                         |     |     |
